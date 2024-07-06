import React from 'react'
import John from "../assets/customer/john.jpg"
import Michael from "../assets/customer/kellt.jpg"
import Kelly from "../assets/customer/Michael.jpg"
const  Customer= ()=> {
  return (
    <>
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
  </div>
  <div className="carousel-inner border rounded-3">
    <div className="carousel-item active">
      <img src={Kelly} className="d-block w-100 opacity-75"  alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5 className='display-4 fs-2'>Outstanding Service</h5>
        <figure>
        <blockquote class="blockquote">
            <p className='text-dark'>I've never experienced such attentive and personalized service. "Certificate Checker" exceeded all my expectations! - <em>Kelly T.</em></p>
        </blockquote>
        </figure>
      </div>
    </div>
    <div className="carousel-item">
      <img src={John} className="d-block w-100 opacity-75"  alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5 className='display-4 fs-2'>Trustworthy and Reliable</h5>
        <figure>
        <blockquote class="blockquote">
            <p className='text-dark'>I've always felt confident in choosing Certchecker. They are trustworthy and deliver on their promises. - <em>Michael R.</em></p>
        </blockquote>
        </figure>
      </div>
    </div>
    <div className="carousel-item">
      <img src={Michael} className="d-block w-100 opacity-75"  alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5 className='display-4 fs-2'>Exceptional Quality</h5>
        <figure>
        <blockquote class="blockquote">
            <p className='text-dark'>The quality of their products and services is top-notch. I'm a loyal customer for life. - <em>John S.</em></p>
        </blockquote>
        </figure>
      </div>
    </div>      
    <div className="carousel-item">
      <img src={Michael} className="d-block w-100 opacity-75"  alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5 className='display-4 fs-2'>Exceptional Quality</h5>
        <figure>
        <blockquote class="blockquote">
            <p className='text-dark'>The quality of their products and services is top-notch. I'm a loyal customer for life. - <em>John S.</em></p>
        </blockquote>
        </figure>
      </div>
    </div>      
    <div className="carousel-item">
      <img src={Michael} className="d-block w-100 opacity-75"  alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5 className='display-4 fs-2'>Exceptional Quality</h5>
        <figure>
        <blockquote class="blockquote">
            <p className='text-dark'>The quality of their products and services is top-notch. I'm a loyal customer for life. - <em>John S.</em></p>
        </blockquote>
        </figure>
      </div>
    </div>      
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</>)
}

export default Customer
