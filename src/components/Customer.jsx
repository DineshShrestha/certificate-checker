import React from 'react'
const  Customer= ()=> {
  return (
    <div className="container-fluid p-2 mb-2 bg-body-tertiary expand-lg rounded-2  ">
    <div id="myCarousel" class="carousel slide mb-6" data-bs-ride="carousel">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" className=""></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" className="active" aria-current="true"></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item">
        <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></svg>
        <div className="container">
          <div className="carousel-caption text-start">
          <h2>Consistently Reliable and Supportive</h2>
            <p className="fs-5 text-muted">"They go above and beyond! Whether it's day or night, their support team is there, ensuring our experience is smooth and hassle-free."<br/><em>- Michael L.</em></p>
            <p><a className="btn btn-lg btn-primary button" href="#">Sign up today</a></p>
          </div>
        </div>
      </div>
      <div className="carousel-item">
        <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></svg>
        <div className="container">
          <div className="carousel-caption">
          <h2>Exceeding Expectations Every Time</h2>
            <p className="fs-5 text-muted">"Outstanding! Their dedication to resolving issues promptly and ensuring we're satisfied sets them apart. Highly recommended."<br/><em>- Sarah P.</em></p>
            <p><a className="btn btn-lg btn-primary button" href="#">Learn more</a></p>
          </div>
        </div>
      </div>
      <div className="carousel-item active">
        <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></svg>
        <div className="container">
          <div className="carousel-caption text-end">
          <h2>Customer Satisfaction at Its Best!</h2>
          <p className="fs-5 text-muted">"Absolutely thrilled with the service! From the ease of use to the responsive support, they truly prioritize customer satisfaction."<br/><em>- John D.</em></p>
            <p><a className="btn btn-lg btn-primary button" href="#">Browse gallery</a></p>
          </div>
        </div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  </div>
  )
}

export default Customer