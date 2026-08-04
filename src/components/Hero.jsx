import React from 'react'

const FEATURE_GROUPS = [
  { title: 'Validation and Verification', items: ['Validity period', 'Expiration alerts'] },
  { title: 'Revocation Status', items: ['OCSP (Online Certificate Status Protocol)', 'CRL (Certificate Revocation List)'] },
  { title: 'Certificate Details', items: ['Subject and issuer information', 'Public key and algorithm information'] },
  { title: 'Compliance and Security', items: ['Key length and strength', 'Algorithm security', 'Standards compliance'] },
  { title: 'Reporting', items: ['Dashboard', 'Detailed reports', 'Export options'] },
  { title: 'Integration and Automation', items: ['API access', 'Automated scanning', 'CI/CD integration'] },
  { title: 'Compatibility', items: ['Support for various certificate types', 'Multi-platform support'] },
  { title: 'Remediation and Management', items: ['Renewal assistance', 'Certificate inventory management'] },
]

export default function Hero() {
  return (
    <div className="container">
      <div className="pb-5 py-2 mb-2 bg-body-tertiary">
        <div className="container-fluid rounded-2 px-5">
          <h3 className="display-2 fw-bold fs-2">
            Keep Your Website Secure with Our SSL Certificate Checker!
          </h3>
          <p className="fs-5 text-muted">
            Instantly verify your SSL/TLS certificates for trust, validity, and compliance.
            Get detailed insights, automated alerts, and seamless integration to maintain
            top-notch security effortlessly. Protect your site and ensure user trust today!
          </p>
          <a className="btn btn-primary btn-lg button" href="#checker">Verify Your SSL Certificate</a>
        </div>
      </div>

      {[0, 4].map((start) => (
        <div className="row align-items-md-stretch my-3" key={start}>
          {FEATURE_GROUPS.slice(start, start + 4).map((group, i) => (
            <div className="col-md-3" key={group.title}>
              <div className={`h-100 px-5 py-3 rounded-3 ${i % 2 === 0 ? 'text-bg-dark' : 'bg-body-tertiary border'}`}>
                <h5 className="text-decoration-underline m-2">{group.title}</h5>
                <ul className="list-unstyled text-small">
                  {group.items.map((item) => <li className="mb-1" key={item}>{item}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
