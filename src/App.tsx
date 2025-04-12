import { useState } from 'react'
import ChatInput from './components/chatinput'
import MessageBubble from './components/MessageBubble'
import ResultPanel from './components/Metrics'
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
    <div className="chat-wrapper">
      <h1 className="header">LLM Backtester Bot</h1>
      
      <div className="chat-box">
        {messages.map((msg, idx) => (
          <MessageBubble key={idx} role={msg.role} text={msg.text} />
        ))}
      </div>

      {/* Insert the ResultPanel component here */}
      <ResultPanel />

      <ChatInput onSend={handleSend} />
    </div>
  )
}

export default App
