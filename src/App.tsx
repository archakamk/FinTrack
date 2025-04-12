import { useState, useEffect } from 'react'
import ChatInput from './components/ChatInput'
import MessageBubble from './components/MessageBubble'
// import History from './components/History'
import Spinner from './components/Spinner'
import './styles/App.css'

function App() {
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string }[]>([])
  const [loading, setLoading] = useState(false)
  const [showPrompt, setShowPrompt] = useState(true)
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const handleSend = (text: string) => {
    setMessages([...messages, { role: 'user', text }])
    setLoading(true)
    setShowPrompt(false)
    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'bot', text: `Echoing: ${text}` }])
      setLoading(false)
    }, 1000)
  }

  useEffect(() => {
    if (messages.length > 0) {
      setShowPrompt(false)
    }
  }, [messages])

  return (
    <>
      {/* 🌌 Background GIF */}
      <div
        className="background-overlay"
        style={{ backgroundImage: `url('https://i.imgur.com/sft8diF.gif')` }}
      ></div>

      <div className="app-container">
        {sidebarOpen && (
          <aside className="sidebar">
            <div className="sidebar-header">
              <img
                src="/image.png"
                alt="Collapse Sidebar"
                className="sidebar-icon"
                onClick={() => setSidebarOpen(false)}
              />
              <h1 className="site-title">FinTrack</h1>
              <img src="/newchat.png" alt="New Chat" className="sidebar-icon" />
            </div>
            {/* <History /> */}
          </aside>
        )}

        {!sidebarOpen && (
          <img
            src="/opensidebar.png"
            alt="Open Sidebar"
            className="open-sidebar-button"
            onClick={() => setSidebarOpen(true)}
          />
        )}

        <main className="main-panel">
          {/* 🔼 NAVBAR */}
          <div className="top-navbar">
            <img src="/Cropped_Image.png" className="nav-logo" alt="Logo" />
            <span className="nav-link">About</span>
            <span className="nav-link">Founders</span>
          </div>

          {showPrompt && (
            <div className="prompt-banner">
              <h2 className="prompt-text fade-in">How can I help you?</h2>
            </div>
          )}

          <div className="chat-area">
            {messages.map((msg, i) => (
              <MessageBubble key={i} role={msg.role} text={msg.text} />
            ))}
            {loading && <Spinner />}
          </div>

          <div className="chat-box-wrapper">
            <ChatInput onSend={handleSend} />
          </div>
        </main>
      </div>
    </>
  )
}

export default App
