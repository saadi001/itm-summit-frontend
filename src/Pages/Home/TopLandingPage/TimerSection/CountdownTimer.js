import React from 'react';
import { useCountdown } from '../../../../Hooks/useCountdown';
import TimerSection from './TimerSection';


const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <div>0</div>;
  } else {
    return (
      <TimerSection
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default CountdownTimer;
