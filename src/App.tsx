import { useState, useEffect } from 'react'
import ChatInput from './components/ChatInput'
import MessageBubble from './components/MessageBubble'
// import History from './components/History'
import Spinner from './components/Spinner'
import './styles/App.css'

function App() {
  const [messages, setMessages] = useState<{ role: 'user' | 'bot', text: string }[]>([])
  const [loading, setLoading] = useState(false)
  const [showPrompt, setShowPrompt] = useState(true)

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
      {/* 🌌 Background GIF from Imgur */}
      <div
        className="background-overlay"
        style={{ backgroundImage: `url('https://i.imgur.com/sft8diF.gif')` }}
      ></div>

      <div className="app-container">
        <aside className="sidebar">
          <h1 className="site-title">LLM Backtester Bot</h1>
          {/* <History /> */}
        </aside>

        <main className="main-panel">
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
