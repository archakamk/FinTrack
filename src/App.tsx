import { useState } from 'react'
import ChatInput from './components/chatinput'
import MessageBubble from './components/MessageBubble'
import History from './components/History'
import Metrics from './components/Metrics'
import './styles/App.css'


function App() {
  const [messages, setMessages] = useState<{ role: 'user' | 'bot', text: string }[]>([])

  const handleSend = (text: string) => {
    setMessages([
      ...messages,
      { role: 'user', text },
      { role: 'bot', text: `Echo: ${text}` }
    ])
  }

  return (
    <div className="app-container">
      <History />
      <div className="main-panel">
        <h1 className="header">LLM Backtester Bot</h1>
        <div className="chat-box">
          {messages.map((msg, idx) => (
            <MessageBubble key={idx} role={msg.role} text={msg.text} />
          ))}
        </div>
        <ChatInput onSend={handleSend} />
        <Metrics />
      </div>
    </div>
  )
}

export default App
