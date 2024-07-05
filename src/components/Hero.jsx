
  import React from 'react'
  
  export default function Hero() {
    return (
      <div className="container">
      <div className="pb-5 py-2 mb-2 bg-body-tertiary">
        <div className="container-fluid rounded-2 px-5">
          <h3 className="display-2 fw-bold fs-2">
          Keep Your Website Secure with Our SSL Certificate Checker!</h3>
          <p class="fs-5 text-muted">Instantly verify 
            your SSL/TLS certificates for trust, validity, and compliance. 
            Get detailed insights, automated alerts, and seamless integration to maintain top-notch security effortlessly. Protect your site and ensure user trust today!
            </p>
          <button className="btn btn-primary btn-lg button" type="button">Verify Your SSL Certificate</button>
        </div>
      </div>
  
      <div className="row align-items-md-stretch">
        <div className="col-md-3">
          <div className="h-100 px-5 py-3 text-bg-dark rounded-3">
            <h5 className='text-decoration-underline m-2'>Validation and Verification</h5>
            <ul class="list-unstyled text-small">
                <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Validity Period</a></li>
                <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Expiration Alerts</a></li>
            </ul>
            <button className="btn btn-outline-light button " type="button">Learn More</button>
          </div>
        </div>
        <div className="col-md-3">
          <div className="h-100 px-5 py-3 bg-body-tertiary border rounded-3">
            <h5 className='text-decoration-underline m-2' >Expiration Check</h5>
            <ul class="list-unstyled text-small">
                <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">OCSP (Online Certificate Status Protocol)</a></li>
                <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">CRL (Certificate Revocation List)</a></li>
            </ul>
            <button className="btn btn-outline-secondary button" type="button">Learn More</button>
          </div>
        </div>
        <div className="col-md-3">
          <div className="h-100 px-5 py-3 text-bg-dark rounded-3">
            <h5 className='text-decoration-underline m-2'>Revocation Status</h5>
            <ul class="list-unstyled text-small">
                <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">OCSP (Online Certificate Status Protocol)</a></li>
                <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">CRL (Certificate Revocation List)</a></li>
            </ul>
            <button className="btn btn-outline-secondary button" type="button">Learn More</button>
          </div>
        </div>
        <div className="col-md-3">
          <div className="h-100 px-5 py-3 bg-body-tertiary border rounded-3">
            <h5 className='text-decoration-underline m-2'>Certificate Details</h5>
            <ul class="list-unstyled text-small">
                <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Subject Information</a></li>
                <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Issuer Information</a></li>
                <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Public Key Information</a></li>
                <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Algorithm Information</a></li>
            </ul>
            <button className="btn btn-outline-secondary button" type="button">Learn More</button>
          </div>
        </div>
      </div>
      <div className="row align-items-md-stretch my-3">
        <div className="col-md-3">
          <div className="h-100 px-5 py-3 text-bg-dark rounded-3">
            <h5 className='text-decoration-underline m-2'>Compliance and Security Checks</h5>
            <ul class="list-unstyled text-small">
                <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Key Length and Strength</a></li>
                <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Algorithm Security</a></li>
                <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Compliance with Standards</a></li>
            </ul>
            <button className="btn btn-outline-light button " type="button">Learn More</button>
          </div>
        </div>
        <div className="col-md-3">
          <div className="h-100 px-5 py-3 bg-body-tertiary border rounded-3">
            <h5 className='text-decoration-underline m-2' >User Interface and Reporting</h5>
            <ul class="list-unstyled text-small">
                <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Dashboard</a></li>
                <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Detailed Reports</a></li>
                <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Export Options</a></li>
            </ul>
            <button className="btn btn-outline-secondary button" type="button">Learn More</button>
          </div>
        </div>
        <div className="col-md-3">
          <div className="h-100 px-5 py-3 text-bg-dark rounded-3">
            <h5 className='text-decoration-underline m-2'>Integration and Automation</h5>
            <ul class="list-unstyled text-small">
                <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">API Access</a></li>
                <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Automated Scanning</a></li>
                <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Integration with CI/CD</a></li>
            </ul>
            <button className="btn btn-outline-secondary button" type="button">Learn More</button>
          </div>
        </div>
        <div className="col-md-3">
          <div className="h-100 px-5 py-3 bg-body-tertiary border rounded-3">
            <h5 className='text-decoration-underline m-2'>Compatibility</h5>
            <ul class="list-unstyled text-small">
                <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Support for Various Certificate Types</a></li>
                <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Multi-Platform Support</a></li>
            </ul>
            <button className="btn btn-outline-secondary button" type="button">Learn More</button>
          </div>
        </div>
      </div>
      <div className="row align-items-md-stretch my-3">
        <div className="col-md-3">
          <div className="h-100 px-5 py-3 text-bg-dark rounded-3">
            <h5 className='text-decoration-underline m-2'>Remediation and Management</h5>
            <ul class="list-unstyled text-small">
                <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Renewal Assistance</a></li>
                <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Remediation Guidance</a></li>
                <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Certificate Inventory Management</a></li>
            </ul>
            <button className="btn btn-outline-light button " type="button">Learn More</button>
          </div>
        </div>
        <div className="col-md-3">
          <div className="h-100 px-5 py-3 bg-body-tertiary border rounded-3">
            <h5 className='text-decoration-underline m-2' >Security and Privacy</h5>
            <ul class="list-unstyled text-small">
                <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Secure Communication</a></li>
                <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Privacy Compliance</a></li>
            </ul>
            <button className="btn btn-outline-secondary button" type="button">Learn More</button>
          </div>
        </div>
      </div>
    </div>
    )
  }
  