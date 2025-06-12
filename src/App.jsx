import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function App() {
  return (
    <div className="container">
      <img src="/logo.png" alt="Logo" className="main-logo" />

      <div className="welcome-banner">
        <img src="/welcome.png" alt="Welcome" className="welcome-image" />
        <h1 className="title">ATTENDANCE</h1>
      </div>

      <h2 className="title">Choose Designated Office</h2>

      <div className="options">
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSeKc8ZQchI-n3YTmm5n8ChF75Q9qym2lpx6pXDImvG-TpZzwA/viewform?usp=header"
          className="card"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>Regional</p>
        </a>

        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfNcLsiiucip9tV5Jh5l93_mihoZ9WgBdUmVsEppXmaZo5f8g/viewform?usp=header"
          className="card"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>Central Office</p>
        </a>
      </div>
    </div>
  );
}


export default App
