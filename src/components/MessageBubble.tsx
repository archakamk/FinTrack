import '../styles/MessageBubble.css'

function MessageBubble({ role, text }: { role: 'user' | 'bot'; text: string }) {
  return (
    <div className={`message-bubble ${role}`}>
      <p>{text}</p>
    </div>
  )
}

export default MessageBubble