import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import useDocumentTitle from '../hooks/useDocumentTitle'

export default function ForgotPassword() {
  useDocumentTitle('Forgot Password - Certificate Checker')
  const { resetPassword } = useAuth()
  const [email, setEmail] = useState('')
  const [error, setError] = useState(null)
  const [message, setMessage] = useState(null)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setMessage(null)
    const { error } = await resetPassword(email)
    setLoading(false)
    if (error) {
      setError(error.message)
      return
    }
    setMessage('Check your email for a password reset link.')
  }

  return (
    <div className="py-5" style={{ maxWidth: 420, margin: '0 auto' }}>
      <h1 className="mb-4">Forgot Password</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="forgot-password-email">Email</label>
          <input
            id="forgot-password-email"
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        {error && <p className="text-danger">{error}</p>}
        {message && <p className="text-success">{message}</p>}
        <button type="submit" className="btn btn-primary button w-100" disabled={loading}>
          {loading ? 'Sending...' : 'Send Reset Link'}
        </button>
      </form>
      <p className="mt-3 text-muted">
        Remembered your password? <Link to="/login">Log in</Link>
      </p>
    </div>
  )
}
