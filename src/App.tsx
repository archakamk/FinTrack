import { useState } from 'react'
import './styles/App.css'

function App() {
  const [messages, setMessages] = useState<string[]>([])

  return (
    <div className="app-container">
      <h1>LLM Backtester Bot</h1>
      <p>Type a stock strategy below to get started.</p>

      {/* Placeholder for Chat UI */}
      <div className="chat-box">
        {messages.map((msg, index) => (
          <div key={index} className="message">{msg}</div>
        ))}
      </div>

      {/* This will later be ChatInput */}
      <input
        type="text"
        className="chat-input"
        placeholder="e.g. Buy AAPL when RSI < 30"
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            const target = e.target as HTMLInputElement;
            setMessages([...messages, target.value]);
            target.value = '';
          }
        }}
      />
    </div>
  )
}

export default App
