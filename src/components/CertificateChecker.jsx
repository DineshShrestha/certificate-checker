import React, { useState } from 'react';
import { checkCertificate, getCertStatus } from '../utils/certChecker';

const STATUS_BADGE = {
  valid: 'text-bg-success',
  expiring: 'text-bg-warning',
  expired: 'text-bg-danger',
};

const STATUS_LABEL = {
  valid: 'Valid',
  expiring: 'Expiring soon',
  expired: 'Expired',
};

export default function CertificateChecker() {
  const [domain, setDomain] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [result, setResult] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      setResult(await checkCertificate(domain));
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  const latest = result?.certificates[0];
  const latestStatus = latest && getCertStatus(latest.not_after);

  return (
    <div id="checker" className="container-fluid px-5 py-4 bg-body-tertiary border rounded-3 mb-4">
      <h3 className="text-decoration-underline">Check a Certificate</h3>
      <p className="fs-6 text-muted">
        Looks up the certificates a domain has been issued via public Certificate Transparency logs.
      </p>
      <form className="row g-2 align-items-center" onSubmit={handleSubmit}>
        <div className="col-auto flex-grow-1">
          <input
            type="text"
            className="form-control"
            placeholder="example.com"
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
            aria-label="Domain to check"
            required
          />
        </div>
        <div className="col-auto">
          <button className="btn btn-primary button" type="submit" disabled={loading}>
            {loading ? 'Checking...' : 'Check Certificate'}
          </button>
        </div>
      </form>

      {error && <p className="text-danger mt-3 mb-0">{error}</p>}

      {latest && (
        <div className="mt-4">
          <div className="d-flex align-items-center gap-2 mb-2">
            <h5 className="mb-0">{result.host}</h5>
            <span className={`badge ${STATUS_BADGE[latestStatus.status]}`}>
              {STATUS_LABEL[latestStatus.status]}
            </span>
          </div>
          <ul className="list-unstyled text-small mb-3">
            <li><strong>Issuer:</strong> {latest.issuer_name}</li>
            <li><strong>Valid from:</strong> {new Date(latest.not_before).toLocaleDateString()}</li>
            <li><strong>Valid until:</strong> {new Date(latest.not_after).toLocaleDateString()}</li>
            <li>
              <strong>Days left:</strong>{' '}
              {latestStatus.status === 'expired'
                ? `expired ${Math.abs(latestStatus.daysLeft)} days ago`
                : latestStatus.daysLeft}
            </li>
          </ul>

          {result.certificates.length > 1 && (
            <details>
              <summary className="text-muted">
                {result.certificates.length - 1} earlier certificate(s) on record
              </summary>
              <ul className="list-unstyled text-small mt-2">
                {result.certificates.slice(1, 6).map((cert) => (
                  <li key={cert.serial_number} className="mb-1">
                    {new Date(cert.not_before).toLocaleDateString()} &ndash;{' '}
                    {new Date(cert.not_after).toLocaleDateString()} issued by {cert.issuer_name}
                  </li>
                ))}
              </ul>
            </details>
          )}
        </div>
      )}
    </div>
  );
}
