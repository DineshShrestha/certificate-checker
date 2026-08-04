import { normalizeDomain, dedupeAndSortEntries, getCertStatus } from './certChecker';

test('normalizeDomain strips protocol, path, and casing', () => {
  expect(normalizeDomain('HTTPS://Example.com/path')).toBe('example.com');
  expect(normalizeDomain('  example.com  ')).toBe('example.com');
});

test('dedupeAndSortEntries keeps one entry per serial, newest first', () => {
  const entries = [
    { serial_number: 'a', not_before: '2024-01-01' },
    { serial_number: 'b', not_before: '2025-01-01' },
    { serial_number: 'a', not_before: '2024-01-01' },
  ];
  const result = dedupeAndSortEntries(entries);
  expect(result).toHaveLength(2);
  expect(result[0].serial_number).toBe('b');
});

test('getCertStatus classifies expired, expiring, and valid certs', () => {
  const now = new Date('2026-01-01T00:00:00Z');
  expect(getCertStatus('2025-12-01T00:00:00Z', now).status).toBe('expired');
  expect(getCertStatus('2026-01-10T00:00:00Z', now).status).toBe('expiring');
  expect(getCertStatus('2026-06-01T00:00:00Z', now).status).toBe('valid');
});
