import React from 'react'
import John from "../assets/customer/john.jpg"
import Michael from "../assets/customer/kellt.jpg"
import Kelly from "../assets/customer/Michael.jpg"

const TESTIMONIALS = [
  { image: Kelly, name: 'Kelly T.', title: 'Outstanding Service', quote: "I've never experienced such attentive and personalized service. Certificate Checker exceeded all my expectations!" },
  { image: John, name: 'Michael R.', title: 'Trustworthy and Reliable', quote: "I've always felt confident in choosing Certificate Checker. They are trustworthy and deliver on their promises." },
  { image: Michael, name: 'John S.', title: 'Exceptional Quality', quote: "The quality of their products and services is top-notch. I'm a loyal customer for life." },
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
            <img src={testimonial.image} className="d-block w-100 opacity-75" alt={testimonial.name} />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="display-4 fs-2">{testimonial.title}</h5>
              <figure>
                <blockquote className="blockquote">
                  <p className="text-dark">{testimonial.quote} &mdash; <em>{testimonial.name}</em></p>
                </blockquote>
              </figure>
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
