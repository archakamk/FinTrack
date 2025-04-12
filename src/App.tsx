import { useState } from 'react'
import ChatInput from './components/ChatInput'
import MessageBubble from './components/MessageBubble'
import History from './components/History'
// import Metrics from './components/Metrics' // Temporarily hidden
import Spinner from './components/Spinner'
import './styles/App.css'

function App() {
  const [messages, setMessages] = useState<{ role: 'user' | 'bot', text: string }[]>([])
  const [loading, setLoading] = useState(false)

  const handleSend = (text: string) => {
    setMessages([...messages, { role: 'user', text }])
    setLoading(true)
    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'bot', text: `Echoing: ${text}` }])
      setLoading(false)
    }, 1000)
  }

  return (
    <div className="app-container">
      <aside className="sidebar">
        <h1 className="site-title">LLM Backtester Bot</h1>
        <History />
      </aside>

      <main className="main-panel">
        <div className="prompt-banner">
          <h2 className="prompt-text">How can I help you?</h2>
        </div>

        <div className="chat-area">
          {messages.map((msg, i) => (
            <MessageBubble key={i} role={msg.role} text={msg.text} />
          ))}
          {loading && <Spinner />}
        </div>

        <ChatInput onSend={handleSend} />
      </main>
    </div>
  )
}

export default App
