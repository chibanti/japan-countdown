import { css } from "@emotion/react";

export const fontFamily = `'Anton', sans-serif;`;
export const borderColor = "#090d0f";
export const cardColor = "#090d0f";
export const fontSize = "5rem";
export const fontSizeMobile = "2rem";

export const fontWidth = "lighter";
export const fontColor = "#00e6bb";

export const easeInOut = "cubic-bezier(0.455, 0.03, 0.515, 0.955)";
export const turnDuration = "0.6s";

export const animate = (
  name: string,
  easing: string,
  duration = "300ms",
  delay = "0s",
  iteration = 1,
  direction = "normal",
  fillMode = "forwards"
) =>
  `animation: ${name} ${duration} ${easing} ${delay} ${iteration} ${direction} ${fillMode};`;
