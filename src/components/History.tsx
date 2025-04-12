import { useState } from 'react'
import '../styles/History.css'

interface ChatHistoryItem {
  id: number;
  title: string;
  timestamp: string;
}

function History() {
  const [history] = useState<ChatHistoryItem[]>([
    { id: 1, title: "Morning Chat Session", timestamp: "2025-04-11 09:00 AM" },
    { id: 2, title: "Pre-market Discussion", timestamp: "2025-04-11 10:30 AM" },
    { id: 3, title: "Afternoon Strategy", timestamp: "2025-04-11 02:15 PM" }
  ]);

  const handleSelect = (item: ChatHistoryItem) => {
    console.log("Selected chat session:", item);
  };

  return (
    <div className="history-panel">
      <div className="history-title">Chat History</div>
      <ul className="history-list">
        {history.map(item => (
          <li key={item.id} className="history-item" onClick={() => handleSelect(item)}>
            <div>{item.title}</div>
            <div className="history-timestamp">{item.timestamp}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default History;
