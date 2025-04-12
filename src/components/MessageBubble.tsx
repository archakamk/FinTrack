import { useState } from 'react'

interface ChatInputProps {
  onSend: (message: string) => void
}

function ChatInput({ onSend }: ChatInputProps) {
  const [input, setInput] = useState('')

  const handleSend = () => {
    if (input.trim()) {
      onSend(input)
      setInput('') 
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSend()
    }
  }

  return (
    <div className="chat-input-container">
      <input
        type="text"
        className="chat-input-field"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyPress}
        placeholder="e.g. Buy TSLA when RSI < 30"
      />
      <button className="chat-send-button" onClick={handleSend}>
        Send
      </button>
    </div>
  )
}

export default ChatInput
