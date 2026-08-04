import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { supabase } from '../lib/supabaseClient'
import useDocumentTitle from '../hooks/useDocumentTitle'

export default function UpdatePassword() {
  useDocumentTitle('Update Password - Certificate Checker')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const [message, setMessage] = useState(null)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setMessage(null)
    const { error } = await supabase.auth.updateUser({ password })
    setLoading(false)
    if (error) {
      setError(error.message)
      return
    }
    setMessage('Your password has been updated.')
  }

  return (
    <div className="py-5" style={{ maxWidth: 420, margin: '0 auto' }}>
      <h1 className="mb-4">Update Password</h1>
      {message ? (
        <p className="text-success">
          {message} <Link to="/login">Log in</Link>
        </p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label" htmlFor="update-password-password">New password</label>
            <input
              id="update-password-password"
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              minLength={6}
              required
            />
          </div>
          {error && <p className="text-danger">{error}</p>}
          <button type="submit" className="btn btn-primary button w-100" disabled={loading}>
            {loading ? 'Updating...' : 'Update Password'}
          </button>
        </form>
      )}
    </div>
  )
}
