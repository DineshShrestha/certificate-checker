import React from 'react'
import useDocumentTitle from '../hooks/useDocumentTitle'

export default function Privacy() {
  useDocumentTitle('Privacy Policy - Certificate Checker')
  return (
    <div className="py-5">
      <h1 className="mb-4">Privacy Policy</h1>
      <p className="fs-5 text-muted">
        Certificate Checker runs entirely in your browser. There is no backend server or
        account system behind the domain lookups on this site.
      </p>
      <h2 className="fs-4 mt-4">What happens when you check a domain</h2>
      <p className="text-muted">
        When you enter a domain, your browser sends a request directly to{' '}
        <a href="https://crt.sh" target="_blank" rel="noreferrer">crt.sh</a>, a public
        Certificate Transparency log search service operated independently of this site.
        We do not see, log, or store the domains you check.
      </p>
      <h2 className="fs-4 mt-4">Cookies and tracking</h2>
      <p className="text-muted">
        This site does not use cookies, analytics, or any third-party tracking scripts.
      </p>
      <h2 className="fs-4 mt-4">Third-party data</h2>
      <p className="text-muted">
        Certificate data displayed here is sourced from crt.sh and reflects publicly logged
        certificates. Refer to crt.sh&apos;s own policies for details on how it handles requests.
      </p>
    </div>
  )
}
