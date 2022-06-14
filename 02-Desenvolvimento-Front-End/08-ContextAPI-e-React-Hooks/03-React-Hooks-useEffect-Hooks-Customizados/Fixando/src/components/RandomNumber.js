import { useEffect, useState } from 'react';

function Timer (mounted) {
  const [time, setTime] = useState(0);
  const [RandomNumber, setRandomNumber] = useState(0);
  const { isMounted } = mounted;
  
  useEffect(() => {
    if(isMounted) {
      const interval = setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);
      const handleSetRandomNumber = () => {
        if (time % 10 === 0) {
          setRandomNumber(Math.floor(Math.random() * 100));
        }
      };
      handleSetRandomNumber();
      return () => {
        clearInterval(interval)
      };
    }
  }, [isMounted, time]);

  return (
    <div>
      <div>{RandomNumber}</div>
    </div>
  );
}

export default Timer;
