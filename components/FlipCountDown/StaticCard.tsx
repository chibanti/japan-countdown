import { css } from "@emotion/react";
import {
  borderRadius,
  fontColor,
  fontFamily,
  fontSize,
  fontSizeMobile,
  fontWidth,
} from "./FlipCountDown.style";

const styles = css`
  &.upperCard,
  &.lowerCard {
    display: flex;
    position: relative;
    justify-content: center;
    width: 100%;
    height: 50%;
    overflow: hidden;

    font-size: ${fontSize};
    font-family: ${fontFamily};
    font-weight: ${fontWidth};

    @media (max-width: 768px) {
      font-size: ${fontSizeMobile};
    }
  }
  &.upperCard {
    align-items: flex-end;
    border-top-left-radius: ${borderRadius};
    border-top-right-radius: ${borderRadius};

    span {
      transform: translateY(50%);
    }
  }
  &.lowerCard {
    align-items: flex-start;
    border-bottom-left-radius: ${borderRadius};
    border-bottom-right-radius: ${borderRadius};

    span {
      transform: translateY(-50%);
    }
  }
`;

const StaticCard = ({
  className,
  digit,
}: {
  className: string;
  digit: string;
}) => {
  return (
    <div css={styles} className={className}>
      <span>{digit}</span>
    </div>
  );
};

export default StaticCard;
