import { useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { useNavigate } from 'react-router-dom'
import '../styles/App.css'

function AboutPage() {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0()
  const navigate = useNavigate()

  useEffect(() => {
    const hash = window.location.hash
    if (hash === '#founders') {
      const el = document.getElementById('founders-section')
      el?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  return (
    <div className="about-page">
      {/* 🔼 Exact same top layout */}
      <div className="top-ui-wrapper">
        <div className="top-navbar">
          <img
            src="/Cropped_Image.png"
            className="nav-logo"
            alt="Logo"
            onClick={() => navigate('/')}
          />
          <span className="nav-link" onClick={() => navigate('/about')}>About</span>
          <span className="nav-link" onClick={() => navigate('/about#founders')}>Founders</span>
        </div>

        <div className="auth-buttons">
          {!isAuthenticated ? (
            <>
              <span className="auth-link" onClick={() => loginWithRedirect()}>Login</span>
              <span
                className="auth-link"
                onClick={() => loginWithRedirect({
                  authorizationParams: { screen_hint: 'signup' }
                })}
              >
                Sign Up
              </span>
            </>
          ) : (
            <span
              className="auth-link"
              onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
            >
              Log Out
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="about-content">
        <h1>About FinTrack</h1>
        <p>This is the about section for FinTrack. 🎯</p>

        <div style={{ height: '400px' }}></div>

        <div id="founders-section">
          <h2>Founders</h2>
          <p>Meet the amazing team behind FinTrack! 🚀</p>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
