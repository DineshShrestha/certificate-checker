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

export async function checkCertificate(domain) {
  const host = normalizeDomain(domain);
  if (!host) throw new Error('Enter a domain to check.');

  const response = await fetch(`${CRTSH_URL}${encodeURIComponent(host)}&output=json`);
  if (!response.ok) throw new Error('crt.sh lookup failed. Try again shortly.');

  const text = await response.text();
  if (!text.trim()) throw new Error(`No certificates found for ${host}.`);

  const entries = JSON.parse(text);
  const certificates = dedupeAndSortEntries(entries);
  if (certificates.length === 0) throw new Error(`No certificates found for ${host}.`);

  return { host, certificates };
}
