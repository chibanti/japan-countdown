import { css } from "@emotion/react";
import {
  animate,
  borderColor,
  cardColor,
  easeInOut,
  fontColor,
  fontFamily,
  fontSize,
  fontSizeMobile,
  fontWidth,
  turnDuration,
} from "./FlipCountDown.style";

export default css`
  display: flex;
  justify-content: center;
  position: absolute;
  left: 0;
  width: 100%;
  height: 50%;
  overflow: hidden;
  backface-visibility: hidden;

  span {
    font-family: ${fontFamily};
    font-size: ${fontSize};
    font-weight: ${fontWidth};
    color: ${fontColor};

    @media (max-width: 768px) {
      font-size: ${fontSizeMobile};
    }
  }

  &.unfold {
    top: 50%;
    align-items: flex-start;
    transform-origin: 50% 0%;
    transform: rotateX(180deg);
    background-color: ${cardColor};
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
    border: 0.5px solid ${borderColor};
    border-top: 0.5px solid ${borderColor};

    span {
      transform: translateY(-50%);
    }
  }
  &.fold {
    top: 0%;
    align-items: flex-end;
    transform-origin: 50% 100%;
    transform: rotateX(0deg);
    background-color: ${cardColor};
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    border: 0.5px solid ${borderColor};
    border-bottom: 0.5px solid ${borderColor};

    span {
      transform: translateY(50%);
    }
  }

  &.fold {
    ${animate("fold", easeInOut, turnDuration)}
    transform-style: preserve-3d;
  }

  &.unfold {
    ${animate("unfold", easeInOut, turnDuration)}
    transform-style: preserve-3d;
  }

  @keyframes fold {
    0% {
      transform: rotateX(0deg);
    }
    100% {
      transform: rotateX(-180deg);
    }
  }

  @keyframes unfold {
    0% {
      transform: rotateX(180deg);
    }
    100% {
      transform: rotateX(0deg);
    }
  }
`;
