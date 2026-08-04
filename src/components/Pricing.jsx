import React from 'react'

const PLANS = [
  {
    name: 'Free',
    price: 0,
    features: ['5 monitored domains', 'Daily expiration checks', 'Email alerts', 'Community support'],
    cta: 'Sign up for free',
    button: 'btn-outline-primary',
  },
  {
    name: 'Pro',
    price: 15,
    features: ['50 monitored domains', 'Hourly expiration checks', 'Email + Slack alerts', 'Priority support'],
    cta: 'Get started',
    button: 'btn-primary',
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 29,
    features: ['Unlimited monitored domains', 'Real-time checks', 'API access', 'Dedicated support'],
    cta: 'Contact us',
    button: 'btn-primary',
  },
]

export default function Pricing() {
  return (
    <div id="pricing">
      <div className="pricing-header p-3 pb-md-4 mx-auto text-center mb-4 bg-body-tertiary rounded-3">
        <h1 className="display-8">Choose the Perfect Plan for Your Needs</h1>
        <p className="fs-5 text-muted">
          Ensure the security and authenticity of your website with our SSL Certificate Checker.
          Select from our flexible pricing plans tailored to fit your requirements.
        </p>
      </div>
      <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
        {PLANS.map((plan) => (
          <div className="col" key={plan.name}>
            <div className={`card mb-4 rounded-3 shadow-sm ${plan.highlight ? 'border-primary' : ''}`}>
              <div className="card-header py-3">
                <h4 className="my-0 fw-normal">{plan.name}</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">
                  ${plan.price}<small className="text-body-secondary fw-light">/mo</small>
                </h1>
                <ul className="list-unstyled mt-3 mb-4">
                  {plan.features.map((feature) => <li key={feature}>{feature}</li>)}
                </ul>
                {plan.name === 'Free' ? (
                  <a href="/#checker" className={`w-100 btn btn-lg ${plan.button} button`}>Start checking for free</a>
                ) : (
                  <>
                    <button type="button" disabled className={`w-100 btn btn-lg ${plan.button} button`}>Coming soon</button>
                    <p className="text-muted small mt-2 mb-0">Contact us to get early access.</p>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
