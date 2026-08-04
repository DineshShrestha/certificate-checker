import React from 'react'

const TOOLS_ICON = (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="bi bi-tools" viewBox="0 0 16 16" aria-hidden="true">
    <path d="M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.27 3.27a.997.997 0 0 0 1.414 0l1.586-1.586a.997.997 0 0 0 0-1.414l-3.27-3.27a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3q0-.405-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814zm9.646 10.646a.5.5 0 0 1 .708 0l2.914 2.915a.5.5 0 0 1-.707.707l-2.915-2.914a.5.5 0 0 1 0-.708M3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026z" />
  </svg>
)

const CPU_ICON = (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="bi bi-cpu-fill" viewBox="0 0 16 16" aria-hidden="true">
    <path d="M6.5 6a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5z" />
    <path d="M5.5.5a.5.5 0 0 0-1 0V2A2.5 2.5 0 0 0 2 4.5H.5a.5.5 0 0 0 0 1H2v1H.5a.5.5 0 0 0 0 1H2v1H.5a.5.5 0 0 0 0 1H2v1H.5a.5.5 0 0 0 0 1H2A2.5 2.5 0 0 0 4.5 14v1.5a.5.5 0 0 0 1 0V14h1v1.5a.5.5 0 0 0 1 0V14h1v1.5a.5.5 0 0 0 1 0V14h1v1.5a.5.5 0 0 0 1 0V14a2.5 2.5 0 0 0 2.5-2.5h1.5a.5.5 0 0 0 0-1H14v-1h1.5a.5.5 0 0 0 0-1H14v-1h1.5a.5.5 0 0 0 0-1H14v-1h1.5a.5.5 0 0 0 0-1H14A2.5 2.5 0 0 0 11.5 2V.5a.5.5 0 0 0-1 0V2h-1V.5a.5.5 0 0 0-1 0V2h-1V.5a.5.5 0 0 0-1 0V2h-1zm1 4.5h3A1.5 1.5 0 0 1 11 6.5v3A1.5 1.5 0 0 1 9.5 11h-3A1.5 1.5 0 0 1 5 9.5v-3A1.5 1.5 0 0 1 6.5 5" />
  </svg>
)

const TOGGLES_ICON = (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="bi bi-toggles" viewBox="0 0 16 16" aria-hidden="true">
    <path d="M4.5 9a3.5 3.5 0 1 0 0 7h7a3.5 3.5 0 1 0 0-7zm7 6a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5m-7-14a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5m2.45 0A3.5 3.5 0 0 1 8 3.5 3.5 3.5 0 0 1 6.95 6h4.55a2.5 2.5 0 0 0 0-5zM4.5 0h7a3.5 3.5 0 1 1 0 7h-7a3.5 3.5 0 1 1 0-7" />
  </svg>
)

const FEATURES = [
  {
    icon: CPU_ICON, title: 'Certificate Lookup & History', items: ['Issuer, validity and expiry via crt.sh', 'Certificate history from CT logs'], status: 'available', href: '/#checker',
    detail: "Enter any domain to see its current certificate's issuer, validity period, and expiration status, plus every certificate it's had issued going back through public Certificate Transparency logs (via crt.sh).",
  },
  {
    icon: TOOLS_ICON, title: 'Real-Time Monitoring', items: ['Continuous SSL monitoring', 'Instant alerts'], status: 'soon',
    detail: 'Would continuously re-check your domains on a schedule and email you before a certificate expires. Not yet built — there is no scheduling or notification backend behind this today.',
  },
  {
    icon: TOGGLES_ICON, title: 'Multi-Domain Support', items: ['Multiple domains per account', 'Wildcard and SAN certificates'], status: 'soon',
    detail: "Would let you save a list of domains, including wildcard and SAN certificates, and see all their statuses in one place. No accounts or saved-domain storage exist yet — today's lookup is one domain at a time.",
  },
  {
    icon: TOOLS_ICON, title: 'Vulnerability Assessment', items: ['Security vulnerability scans', 'Remediation advice'], status: 'soon',
    detail: "Would scan a domain's TLS configuration for weak ciphers, protocol issues, and known vulnerabilities with remediation guidance. This scanning engine has not been built.",
  },
  {
    icon: CPU_ICON, title: 'User-Friendly Dashboard', items: ['Intuitive interface', 'Custom views'], status: 'soon',
    detail: "Would give you a single dashboard summarizing all your saved domains' certificate health at a glance. No accounts or dashboards exist yet — only the one-off lookup above.",
  },
  {
    icon: TOGGLES_ICON, title: 'Automated Renewals', items: ['Automatic renewal support', 'CA integrations'], status: 'soon',
    detail: 'Would integrate with your certificate authority to renew certificates automatically before they expire. No CA integration or renewal automation exists today.',
  },
  {
    icon: TOGGLES_ICON, title: 'Advanced Analytics', items: ['Real-time analytics', 'Trend analysis'], status: 'soon',
    detail: 'Would chart trends across your certificate history — issuer changes, renewal cadence, expiry patterns over time. No analytics pipeline exists behind this yet.',
  },
  {
    icon: TOOLS_ICON, title: 'API Access', items: ['Developer-friendly API', 'Custom integrations'], status: 'soon',
    detail: 'Would expose this certificate-lookup capability as a documented API you could call from your own tools. No public API exists yet — only this web page.',
  },
  {
    icon: CPU_ICON, title: '24/7 Support', items: ['Expert assistance', 'Knowledge base'], status: 'soon',
    detail: 'Would provide a support team and knowledge base for help with certificate issues. There is no support staffing or knowledge base behind this today.',
  },
]

function FeatureCard({ icon, title, items, status, href, detail }) {
  const titleEl = <h3 className="fs-5 mb-0">{title}</h3>
  return (
    <div className="col d-flex align-items-start">
      <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-5 flex-shrink-0 me-3 featureIcon">
        {icon}
      </div>
      <div>
        <div className="d-flex align-items-center gap-2 mb-1">
          {href ? <a href={href}>{titleEl}</a> : titleEl}
          {status === 'available'
            ? <span className="badge text-bg-success">Available now</span>
            : <span className="badge text-bg-secondary">Coming soon</span>}
        </div>
        <ul className="list-unstyled text-small">
          {items.map((item) => <li className="mb-1" key={item}>{item}</li>)}
        </ul>
        <details>
          <summary className="text-muted text-small">More details</summary>
          <p className="text-small mt-2 mb-0">{detail}</p>
        </details>
      </div>
    </div>
  )
}

export default function Feature() {
  return (
    <div className="container p-5 mb-2 bg-body-tertiary border rounded-3" id="hanging-icons">
      <h1 className="pb-3 border-bottom">Feature Products</h1>
      <div className="row g-4 py-3 row-cols-1 row-cols-lg-4">
        {FEATURES.map((feature) => <FeatureCard key={feature.title} {...feature} />)}
      </div>
    </div>
  )
}
