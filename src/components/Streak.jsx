import React, { useState, useEffect } from 'react';
import { differenceInCalendarDays, differenceInSeconds, startOfTomorrow } from 'date-fns';
import CircularBar from './Circularbar'; // Import your CircularBar component
import User from './User'; // Import your User component

function StreakCounter() {
    const [streak, setStreak] = useState(0);
    const [lastDate, setLastDate] = useState(null);
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    const [timeRemaining, setTimeRemaining] = useState('');
    const [progress, setProgress] = useState(0);
    const gas=10000000000000000;
    const fees=4000000000000000000000;
    useEffect(() => {
      const savedStreak = localStorage.getItem('streak');
      const savedLastDate = localStorage.getItem('lastDate');
  
      if (savedStreak && savedLastDate) {
        const parsedStreak = parseInt(savedStreak, 10);
        const parsedLastDate = new Date(savedLastDate);
  
        const daysDifference = differenceInCalendarDays(new Date(), parsedLastDate);
  
        if (daysDifference === 0) {
          setStreak(parsedStreak);
          setLastDate(parsedLastDate);
          setIsButtonDisabled(true);
          startTimer();
          updateProgress(parsedStreak);
        } else if (daysDifference === 1) {
          setStreak(parsedStreak + 1);
          setLastDate(new Date());
          localStorage.setItem('streak', parsedStreak + 1);
          localStorage.setItem('lastDate', new Date());
          updateProgress(parsedStreak + 1);
        } else {
          setStreak(1);
          setLastDate(new Date());
          localStorage.setItem('streak', 1);
          localStorage.setItem('lastDate', new Date());
          updateProgress(1);
        }
      } else {
        setStreak(1);
        setLastDate(new Date());
        localStorage.setItem('streak', 1);
        localStorage.setItem('lastDate', new Date());
        updateProgress(1);
      }
    }, []);
  
    const handleActivityComplete = () => {
      const today = new Date();
      const daysDifference = differenceInCalendarDays(today, lastDate);
  
      if (daysDifference === 0) {
        alert('Activity already completed today!');
        return;
      }
  
      if (daysDifference === 1) {
        const newStreak = streak + 1;
        setStreak(newStreak);
        setLastDate(today);
        localStorage.setItem('streak', newStreak);
        localStorage.setItem('lastDate', today);
        updateProgress(newStreak);
      } else {
        setStreak(1);
        setLastDate(today);
        localStorage.setItem('streak', 1);
        localStorage.setItem('lastDate', today);
        updateProgress(1);
      }
  
      setIsButtonDisabled(true);
     
      startTimer();
    };
  
    const updateProgress = (newStreak) => {
      // Assuming 30 days is the maximum streak for full progress
      setProgress((newStreak / 7) * 100);
    };
  
    const startTimer = () => {
      const endOfDay = startOfTomorrow();
      const interval = setInterval(() => {
        const secondsRemaining = differenceInSeconds(endOfDay, new Date());
        if (secondsRemaining <= 0) {
          clearInterval(interval);
          setIsButtonDisabled(false);
          setTimeRemaining('');
        } else {
          // const hours = Math.floor(secondsRemaining / 3600);
          // const minutes = Math.floor((secondsRemaining % 3600) / 60);
          const seconds = secondsRemaining % 60;
          setTimeRemaining(`${seconds}s`);
        }
      }, 1000);
    };
  
    return (
      <div style={{ textAlign: 'center', padding: '20px', backgroundColor: '#282c34', color: 'white', minHeight: '100vh' }}>
        <h1>Streak Counter</h1>
        <div style={{ position: 'relative', width: '150px', height: '150px', margin: '0 auto' }}>
          <CircularBar progress={progress} /> {/* Use the CircularBar component */}
          <img src="https://i.postimg.cc/XN5QRG6N/Animation-1716211263796.gif" alt="fire" style={{ position: 'absolute', top: '40%', left: '50%', transform: 'translate(-50%, -50%)', width: '100%', height: '100%' }} />
        </div>
        <p>Current Streak: {streak} {streak === 1 ? 'day' : 'days'}</p>
        <button
          onClick={handleActivityComplete}
          disabled={isButtonDisabled}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: isButtonDisabled ? 'grey' : '#61dafb',
            border: 'none',
            borderRadius: '5px',
            cursor: isButtonDisabled ? 'not-allowed' : 'pointer'
          }}
        >
          {isButtonDisabled ? `Next click available in: ${timeRemaining}` : 'Complete Activity'}
        </button>
        {/* <User /> */}
      </div>
    );
  }
  
  export default StreakCounter;
