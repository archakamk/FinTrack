import { useState } from 'react'
import '../styles/ChatInput.css'

function ChatInput({ onSend }: { onSend: (msg: string) => void }) {
  const [input, setInput] = useState('')

  const handleKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && input.trim()) {
      onSend(input)
      setInput('')
    }
  }

  const handleSend = () => {
    if (input.trim()) {
      onSend(input)
      setInput('')
    }
  }

  return (
    <div className="chat-input-wrapper">
      <input
        className="chat-input"
        type="text"
        placeholder="Ask something..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKey}
      />
      <button className="send-button" onClick={handleSend}>
        Send
      </button>
    </div>
  )
}

export default ChatInput
