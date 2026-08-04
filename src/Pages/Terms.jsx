import React from 'react'
import useDocumentTitle from '../hooks/useDocumentTitle'

export default function Terms() {
  useDocumentTitle('Terms of Service - Certificate Checker')
  return (
    <div className="py-5">
      <h1 className="mb-4">Terms of Service</h1>
      <p className="fs-5 text-muted">
        By using Certificate Checker, you agree to the following terms.
      </p>
      <h2 className="fs-4 mt-4">Use of the service</h2>
      <p className="text-muted">
        Certificate Checker is provided as an informational tool for looking up publicly
        available SSL/TLS certificate data. It is not a substitute for your own security
        review, and results should not be relied on as the sole basis for security or
        compliance decisions.
      </p>
      <h2 className="fs-4 mt-4">Third-party data</h2>
      <p className="text-muted">
        Certificate data is sourced from crt.sh, a third-party Certificate Transparency log
        service we do not operate or control. We make no guarantee of its accuracy, completeness,
        or availability.
      </p>
      <h2 className="fs-4 mt-4">No warranty</h2>
      <p className="text-muted">
        This service is provided &quot;as is&quot;, without warranty of any kind, express or implied.
        We are not liable for any damages arising from its use.
      </p>
    </div>
  )
}
