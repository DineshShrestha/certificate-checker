import React from 'react'

export default class ErrorBoundary extends React.Component {
  state = { hasError: false }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, info) {
    console.error('Unhandled error in app:', error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="container py-5 text-center">
          <h1 className="mb-3">Something went wrong</h1>
          <p className="text-muted mb-4">
            An unexpected error occurred. Try reloading the page.
          </p>
          <button className="btn btn-primary button" onClick={() => window.location.reload()}>
            Reload
          </button>
        </div>
      )
    }
    return this.props.children
  }
}
