import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import AnimatedCard from "./AnimatedCard";
import { cardColor } from "./FlipCountDown.style";
import StaticCard from "./StaticCard";

const styles = css`
  display: block;
  position: relative;
  width: 140px;
  height: 120px;
  perspective-origin: 50% 50%;
  perspective: 300px;
  background-color: ${cardColor};
  border-radius: 10px;

  @media (max-width: 768px) {
    width: 70px;
    height: 60px;
  }
`;

const FlipUnitContainer = ({
  digit,
  unit,
}: {
  digit: number;
  unit: string;
}) => {
  const [value, setValue] = useState(0);
  const [shuffle, setShuffle] = useState(true);

  useEffect(() => {
    if (value !== digit) {
      setShuffle((prev) => !prev);
    }

    setValue(digit);
  }, [digit]);

  // assign digit values
  let currentDigit = digit;
  let nextDigit = digit + 1;

  // to prevent a negative value
  if (unit !== "hours") {
    nextDigit = nextDigit === 60 ? 0 : nextDigit;
  } else {
    nextDigit = nextDigit === 24 ? 0 : nextDigit;
  }

  // shuffle digits
  const digit1 = shuffle ? nextDigit : currentDigit;
  const digit2 = !shuffle ? nextDigit : currentDigit;

  // shuffle animations
  const animation1 = shuffle ? "fold" : "unfold";
  const animation2 = !shuffle ? "fold" : "unfold";

  return (
    <div css={styles}>
      <StaticCard className="upperCard" digit={zeroPad(currentDigit, 2)} />
      <StaticCard className="lowerCard" digit={zeroPad(nextDigit, 2)} />
      <AnimatedCard digit={zeroPad(digit1, 2)} animation={animation1} />
      <AnimatedCard digit={zeroPad(digit2, 2)} animation={animation2} />
      <h4>{getTitle(unit)}</h4>
    </div>
  );
};

export const zeroPad = (num: number, places: number) =>
  String(num).padStart(places, "0");

export default FlipUnitContainer;

const getTitle = (unit: string) => {
  switch (unit) {
    case "days":
      return "Dagar";
    case "hours":
      return "Timmar";
    case "minutes":
      return "Minuter";
    case "seconds":
      return "Sekunder";
    default:
      return unit;
  }
};
