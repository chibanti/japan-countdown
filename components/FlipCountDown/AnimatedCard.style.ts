import { css } from "@emotion/react";
import {
  animate,
  borderRadius,
  easeInOut,
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

  font-family: ${fontFamily};
  font-size: ${fontSize};
  font-weight: ${fontWidth};

  @media (max-width: 768px) {
    font-size: ${fontSizeMobile};
  }

  &.unfold {
    top: 50%;
    align-items: flex-start;
    transform-origin: 50% 0%;
    transform: rotateX(180deg);
    border-bottom-left-radius: ${borderRadius};
    border-bottom-right-radius: ${borderRadius};

    span {
      transform: translateY(-50%);
    }
  }
  &.fold {
    top: 0%;
    align-items: flex-end;
    transform-origin: 50% 100%;
    transform: rotateX(0deg);
    border-top-left-radius: ${borderRadius};

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
