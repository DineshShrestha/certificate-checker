import React from 'react'
import useDocumentTitle from '../hooks/useDocumentTitle'

export default function About() {
  useDocumentTitle('About - Certificate Checker')
  return (
    <div className="py-5">
      <h1 className="mb-4">About Certificate Checker</h1>
      <p className="fs-5 text-muted">
        Certificate Checker is a free tool for looking up the SSL/TLS certificates a domain
        has been issued. Enter any domain and we query public Certificate Transparency logs
        to show you the current certificate&apos;s issuer, validity period, and expiration status,
        along with its certificate history.
      </p>
      <p className="fs-5 text-muted">
        Certificate Transparency is a public, browser-mandated logging system: every certificate
        issued by a publicly-trusted certificate authority is recorded in append-only logs that
        anyone can query. That means the data behind every lookup here is real and verifiable,
        not something we generate or store ourselves.
      </p>
      <p className="fs-5 text-muted">
        This project is open source. You can read or contribute to the code on{' '}
        <a href="https://github.com/DineshShrestha/certificate-checker" target="_blank" rel="noreferrer">
          GitHub
        </a>.
      </p>
    </div>
  )
}
