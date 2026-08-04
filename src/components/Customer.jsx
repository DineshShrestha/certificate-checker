import React from 'react'
import John from "../assets/customer/john.jpg"
import Kelly from "../assets/customer/kellt.jpg"
import Michael from "../assets/customer/Michael.jpg"

const TESTIMONIALS = [
  { image: Kelly, name: 'Kelly T.', title: 'Outstanding Service', quote: "I've never experienced such attentive and personalized service. Certificate Checker exceeded all my expectations." },
  { image: Michael, name: 'Michael R.', title: 'Trustworthy and Reliable', quote: "I've always felt confident choosing Certificate Checker. They're reliable and deliver on their promises." },
  { image: John, name: 'John S.', title: 'Exceptional Quality', quote: "The quality of their product and support is top-notch. I'm a customer for life." },
]

export default function Customer() {
  return (
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
      <div className="carousel-indicators">
        {TESTIMONIALS.map((_, i) => (
          <button
            key={i}
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={i}
            className={i === 0 ? 'active' : ''}
            aria-current={i === 0 ? 'true' : undefined}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
      <div className="carousel-inner border rounded-3">
        {TESTIMONIALS.map((testimonial, i) => (
          <div className={`carousel-item ${i === 0 ? 'active' : ''}`} key={testimonial.name}>
            <img src={testimonial.image} className="d-block w-100" alt={testimonial.name} />
            <div className="carousel-caption testimonial-caption d-none d-md-block text-start">
              <h5 className="fs-3 fw-bold text-white">{testimonial.title}</h5>
              <blockquote className="blockquote mb-0">
                <p className="fs-6 text-white-50 mb-1">{testimonial.quote}</p>
                <footer className="fs-6 text-white">&mdash; {testimonial.name}</footer>
              </blockquote>
            </div>
          </div>
        ))}
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
  )
}
