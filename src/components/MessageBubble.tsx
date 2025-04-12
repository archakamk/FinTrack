interface MessageBubbleProps {
  role: 'user' | 'bot';
  text: string;
}

function MessageBubble({ role, text }: MessageBubbleProps) {
  return (
    <div className={`message-bubble ${role}`}>
      {text}
    </div>
  );
}

export default MessageBubble;
