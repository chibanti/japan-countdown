import { css } from "@emotion/react";
import {
  borderColor,
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
    border: 1px solid ${borderColor};

    span {
      font-size: ${fontSize};
      font-family: ${fontFamily};
      font-weight: ${fontWidth};
      color: ${fontColor};

      @media (max-width: 768px) {
        font-size: ${fontSizeMobile};
      }
    }
  }
  &.upperCard {
    align-items: flex-end;
    border-bottom: 0.5px solid ${borderColor};
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;

    span {
      transform: translateY(50%);
    }
  }
  &.lowerCard {
    align-items: flex-start;
    border-top: 0.5px solid ${borderColor};
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;

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
