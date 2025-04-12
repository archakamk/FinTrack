<<<<<<< HEAD
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
=======
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
>>>>>>> fc1a70ea8ea6f8e1c48d387b3264329738f87efa
