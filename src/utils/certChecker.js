// Certificate Transparency lookup via crt.sh (free, no key, CORS-enabled).
const CRTSH_URL = 'https://crt.sh/?q=';

export function normalizeDomain(input) {
  return input
    .trim()
    .toLowerCase()
    .replace(/^https?:\/\//, '')
    .replace(/\/.*$/, '');
}

export function dedupeAndSortEntries(entries) {
  const bySerial = new Map();
  for (const entry of entries) {
    if (!bySerial.has(entry.serial_number)) bySerial.set(entry.serial_number, entry);
  }
  return [...bySerial.values()].sort(
    (a, b) => new Date(b.not_before) - new Date(a.not_before)
  );
}

export function getCertStatus(notAfter, now = new Date()) {
  const daysLeft = Math.ceil((new Date(notAfter) - now) / 86400000);
  if (daysLeft < 0) return { status: 'expired', daysLeft };
  if (daysLeft <= 30) return { status: 'expiring', daysLeft };
  return { status: 'valid', daysLeft };
}

// crt.sh's backend is a shared, unauthenticated public service and often returns
// a transient 502/404/empty body under load. Retry a few times before giving up.
async function fetchCrtSh(host, attempts = 3) {
  for (let attempt = 1; attempt <= attempts; attempt++) {
    try {
      const response = await fetch(`${CRTSH_URL}${encodeURIComponent(host)}&output=json`);
      const text = await response.text();
      if (response.ok && text.trim()) return JSON.parse(text);
    } catch {
      // fall through to retry
    }
    if (attempt < attempts) await new Promise((r) => setTimeout(r, attempt * 800));
  }
  throw new Error('crt.sh lookup failed after retries. Try again shortly.');
}

export async function checkCertificate(domain) {
  const host = normalizeDomain(domain);
  if (!host) throw new Error('Enter a domain to check.');

  const entries = await fetchCrtSh(host);
  const certificates = dedupeAndSortEntries(entries);
  if (certificates.length === 0) throw new Error(`No certificates found for ${host}.`);

  return { host, certificates };
}
