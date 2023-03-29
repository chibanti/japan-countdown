import styles from "./AnimatedCard.style";

type Animation = "fold" | "unfold";

const AnimatedCard = ({
  animation,
  digit,
}: {
  animation: Animation;
  digit: string;
}) => {
  return (
    <div css={styles} className={`flipCard ${animation}`}>
      <span>{digit}</span>
    </div>
  );
};

export default AnimatedCard;
