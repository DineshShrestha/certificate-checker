import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import useDocumentTitle from '../hooks/useDocumentTitle'

export default function Register() {
  useDocumentTitle('Register - Certificate Checker')
  const { signUp } = useAuth()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const [message, setMessage] = useState(null)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setMessage(null)
    const { data, error } = await signUp(email, password)
    setLoading(false)
    if (error) {
      setError(error.message)
      return
    }
    if (!data.session) {
      setMessage('Check your email to confirm your account before logging in.')
      return
    }
    navigate('/')
  }

  return (
    <div className="py-5" style={{ maxWidth: 420, margin: '0 auto' }}>
      <h1 className="mb-4">Register</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="register-email">Email</label>
          <input
            id="register-email"
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="register-password">Password</label>
          <input
            id="register-password"
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            minLength={6}
            required
          />
        </div>
        {error && <p className="text-danger">{error}</p>}
        {message && <p className="text-success">{message}</p>}
        <button type="submit" className="btn btn-primary button w-100" disabled={loading}>
          {loading ? 'Creating account...' : 'Register'}
        </button>
      </form>
      <p className="mt-3 text-muted">
        Already have an account? <Link to="/login">Log in</Link>
      </p>
    </div>
  )
}
