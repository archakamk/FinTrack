import { useState } from 'react'
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
          <div key={idx} className={`message ${msg.role}`}>
            {msg.text}
          </div>
        ))}
      </div>

      <ChatInput onSend={handleSend} />
    </div>
  )
}

// Inline ChatInput definition:
function ChatInput({ onSend }: { onSend: (text: string) => void }) {
  const [input, setInput] = useState('')

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && input.trim()) {
      onSend(input)
      setInput('')
    }
  }

  return (
    <div className="chat-input-bar">
      <input
        className="chat-input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyPress}
        placeholder="e.g. Buy AAPL when RSI < 30"
      />
      <button
        className="send-btn"
        onClick={() => {
          if (input.trim()) {
            onSend(input)
            setInput('')
          }
        }}
      >
        Send
      </button>
    </div>
  )
}

export default App
