import React from 'react'

export default function Logo() {
  return (
    <span className="d-inline-flex align-items-center gap-2 logo-mark">
      <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true">
        <path fill="#28A745" d="M12 1 3 5v6c0 5 3.8 9.4 9 11 5.2-1.6 9-6 9-11V5z" />
        <path fill="none" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" d="m8.5 12 2.7 2.7L16 9.6" />
      </svg>
      <span className="fw-bold fs-5">Certificate Checker</span>
    </span>
  )
}
