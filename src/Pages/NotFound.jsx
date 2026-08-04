import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="py-5">
      <h1 className="mb-4">404 - Page Not Found</h1>
      <p className="fs-5 text-muted">
        The page you&apos;re looking for doesn&apos;t exist or may have been moved.
      </p>
      <Link to="/">Go back home</Link>
    </div>
  )
}
