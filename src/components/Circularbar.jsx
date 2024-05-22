import React from 'react';

function CircularBar({ progress }) {
  return (
    <svg width="150" height="150" viewBox="0 0 150 150" className="neon-glow">
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: '#f00', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#ff0', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <circle cx="75" cy="75" r="70" fill="none" stroke="#444" strokeWidth="10" />
      <circle cx="75" cy="75" r="70" fill="none" stroke="url(#gradient)" strokeWidth="10" strokeDasharray={`${progress}, 440`} transform="rotate(-90 75 75)" />
      <style jsx>{`
        .neon-glow {
          filter: drop-shadow(0 0 10px #ff9933) drop-shadow(0 0 20px #ff9933) drop-shadow(0 0 30px #ff9933);
          animation: neon-glow-animation 1.5s infinite alternate;
        }
        @keyframes neon-glow-animation {
          from {
            filter: drop-shadow(0 0 10px #ff9933) drop-shadow(0 0 20px #ff9933) drop-shadow(0 0 30px #ff9933);
          }
          to {
            filter: drop-shadow(0 0 20px #ff9933) drop-shadow(0 0 40px #ff9933) drop-shadow(0 0 60px #ff9933);
          }
        }
      `}</style>
    </svg>
  );
}

export default CircularBar;
