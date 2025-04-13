import { useEffect } from 'react'
import '../styles/App.css'

function AboutPage() {
  useEffect(() => {
    const hash = window.location.hash
    if (hash === '#founders') {
      const el = document.getElementById('founders-section')
      el?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  return (
    <div className="about-page">
      <h1>About FinTrack</h1>
      <p>This is the about section for FinTrack. 🎯</p>

      <div style={{ height: '400px' }}></div> {/* Spacer */}

      <div id="founders-section">
        <h2>Founders</h2>
        <p>Meet the amazing team behind FinTrack! 🚀</p>
      </div>
    </div>
  )
}

export default AboutPage
