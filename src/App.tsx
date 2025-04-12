import { useState } from 'react'
import ChatInput from './components/chatinput'
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
      <History />
      <main className="main-panel">
        <header className="top-bar">
          <h1 className="title">LLM Backtester Bot</h1>
        </header>
        <div className="chat-area">
          {messages.map((msg, i) => (
            <MessageBubble key={i} role={msg.role} text={msg.text} />
          ))}
          {loading && <Spinner />}
        </div>
        <ChatInput onSend={handleSend} />
        {/* <Metrics /> */}
      </main>
    </div>
  )
}

export default App
