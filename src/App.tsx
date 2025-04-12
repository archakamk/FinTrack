import { useState } from 'react'
import ChatInput from './components/ChatInput' 
import MessageBubble from './components/MessageBubble'
import History from './components/History'
import Metrics from './components/Metrics'
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
        <div className="chat-area">
          {messages.map((msg, i) => (
            <MessageBubble key={i} role={msg.role} text={msg.text} />
          ))}
          {loading && <Spinner />}
        </div>
        <ChatInput onSend={handleSend} />
        <Metrics />
      </main>
    </div>
  )
}

export default App
