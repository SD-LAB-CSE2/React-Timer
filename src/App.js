import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {


  const calculateTimeLeft = () => {
    const date = new Date();

    let timeLeft = {}

    timeLeft = {
      hours: 24 - date.getHours(),
      minutes: 60 - date.getMinutes(),
      seconds: 60 - date.getSeconds()
    };

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [year] = useState(new Date().getFullYear());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval, index) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span key={index}>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });
  return (
    <div>
      <h1>React Timer coundown</h1>
      {timerComponents}
    </div>
  );
}

export default App;
