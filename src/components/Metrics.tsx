import { useState } from 'react'
import '../styles/Metrics.css'

const tabNames = ['Code', 'Chart', 'Metrics']

function Metrics() {
  const [activeTab, setActiveTab] = useState('Code')

  return (
    <div className="metrics-panel">
      <div className="tab-bar">
        {tabNames.map((tab) => (
          <button
            key={tab}
            className={`tab-button ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {activeTab === 'Code' && (
          <div className="code-output">
            <pre>
              <code>
                {`// Backtest code goes here
function backtest() {
  // ... your algorithm logic ...
}`}
              </code>
            </pre>
          </div>
        )}
        {activeTab === 'Chart' && (
          <div className="chart-output">
            <p>Chart will be displayed here</p>
            {/* Future: integrate charting library */}
          </div>
        )}
        {activeTab === 'Metrics' && (
          <div className="metrics-output">
            <p>Key Metrics:</p>
            <ul>
              <li>Return: 12%</li>
              <li>Sharpe Ratio: 1.5</li>
              <li>Max Drawdown: 10%</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default Metrics
