import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import FlipUnitContainer from "./FlipUnitContainer";

interface Duration {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const styles = css`
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  width: 3 * 140px + 80px;

  @media (max-width: 768px) {
    width: 3 * 70px + 40px;
  }
`;

interface Props {
  timeStamp: number;
}

const FlipCountDown: React.FC<Props> = ({ timeStamp }) => {
  const [timeLeft, setTimeLeft] = useState<Duration | null>(null);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date().getTime();
      const diff = timeStamp - now;

      if (diff < 0) return null;

      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({ days: d, hours: h, minutes: m, seconds: s });
    };

    const timerID = setInterval(() => updateTime(), 50);

    return () => clearInterval(timerID);
  }, [timeStamp]);

  if (!timeLeft) return null;

  return (
    <div css={styles} className={"flipClock"}>
      <FlipUnitContainer unit={"days"} digit={timeLeft.days} />
      <FlipUnitContainer unit={"hours"} digit={timeLeft.hours} />
      <FlipUnitContainer unit={"minutes"} digit={timeLeft.minutes} />
      <FlipUnitContainer unit={"seconds"} digit={timeLeft.seconds} />
    </div>
  );
};

export default FlipCountDown;
