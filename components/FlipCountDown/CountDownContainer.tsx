import FlightDetail from "@compontens/components/FlightDetail";
import FlipCountDown from "@compontens/components/FlipCountDown/FlipCountDown";
import { css } from "@emotion/react";
import { motion } from "framer-motion";

interface Props {
  className?: string;
  title: string;
  remainingText: string;
  renderSpecific: () => JSX.Element;
  timeStamp: number;
}

const CountDownContainer: React.FC<Props> = ({
  className,
  title,
  remainingText,
  renderSpecific,
  timeStamp,
}) => {
  return (
    <div
      css={css`
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center;
      `}
      className={className}
    >
      <motion.h1
        initial={{ opacity: 0, y: -50, scale: 0 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, origin: 1, ease: "easeIn" }}
      >
        {title}
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0, y: 50, scale: 0 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, ease: "easeIn" }}
      >
        {remainingText}
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 200, scale: 0 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, ease: "easeIn" }}
      >
        <FlipCountDown timeStamp={timeStamp} />
      </motion.div>
      {renderSpecific?.()}
    </div>
  );
};

export default CountDownContainer;
