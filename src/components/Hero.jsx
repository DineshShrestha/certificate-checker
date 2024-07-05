
  import React from 'react'
  
  export default function Hero() {
    return (
      <div className="container py-4">
      <div className="p-5 mb-4 bg-body-tertiary rounded-3">
        <div className="container-fluid py-5">
          <h3 className="display-5 fw-bold">Certificate Checker</h3>
          <p className="col-md-8 fs-4">Welcome to our Certificate Verification Tool. Enter your certificate details below to effortlessly confirm the authenticity of your credentials. Our secure and intuitive platform ensures that employers, institutions, and individuals can confidently verify the legitimacy of certifications.</p>
          <button className="btn btn-primary btn-lg button" type="button">Verify Your SSL Certificate</button>
        </div>
      </div>
  
      <div className="row align-items-md-stretch">
        <div className="col-md-6">
          <div className="h-100 p-5 text-bg-dark rounded-3">
            <h2>Change the background</h2>
            <p className='text-light'>Swap the background-color utility and add a `.text-*` color utility to mix up the jumbotron look. Then, mix and match with additional component themes and more.</p>
            <button className="btn btn-outline-light button " type="button">Example button</button>
          </div>
        </div>
        <div className="col-md-6">
          <div className="h-100 p-5 bg-body-tertiary border rounded-3">
            <h2>Add borders</h2>
            <p className='text-dark'>Or, keep it light and add a border for some added definition to the boundaries of your content. Be sure to look under the hood at the source HTML here as we've adjusted the alignment and sizing of both column's content for equal-height.</p>
            <button className="btn btn-outline-secondary button" type="button">Example button</button>
          </div>
        </div>
      </div>
    </div>
    )
  }
  