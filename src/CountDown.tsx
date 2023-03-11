import { useEffect, useState } from "react";

interface Duration {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface Props {
  timeStamp: number;
}

const CountDown: React.FC<Props> = ({ timeStamp }) => {
  const [timeLeft, setTimeLeft] = useState<Duration | null>(
    getTimeLeft(timeStamp)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft(timeStamp));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!timeLeft) return null;

  return (
    <>
      <p>Resan till Japan avgår om</p>
      <h2>{timeLeft.days} dagar</h2>
      <p>{`och  ${zeroPad(timeLeft.hours, 2)}:${zeroPad(
        timeLeft.minutes,
        2
      )}:${zeroPad(timeLeft.seconds, 2)}`}</p>
    </>
  );
};

export default CountDown;

const getTimeLeft = (timeStamp: number): Duration | null => {
  const now = new Date().getTime();
  const diff = timeStamp - now;

  if (diff < 0) return null;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
};

export const zeroPad = (num: number, places: number) =>
  String(num).padStart(places, "0");
