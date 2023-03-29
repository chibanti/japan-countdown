import { css } from "@emotion/react";

export const colors = {
  mint: {
    cardColor: "#131c20",
    cardFontColor: "#00e6bb",
    cardBorderColor: "#090d0f",
  },
  blackTexts: {
    cardColor: "#fff",
    cardFontColor: "#000",
    cardBorderColor: "#bbb",
  },
};

export const themes = {
  blackTexts: css`
    h1,
    h2,
    h3,
    h4,
    p {
      color: black;
    }

    h4,
    p {
      color: white;
      text-shadow: 0 0 3px #000;
    }

    .FlipUnitContainer,
    .fold,
    .unfold {
      color: ${colors.blackTexts.cardFontColor};
      background: ${colors.blackTexts.cardColor};
    }

    .unfold {
      color: ${colors.blackTexts.cardFontColor};
      border: 0.5px solid ${colors.blackTexts.cardBorderColor};
      border-top: 0.5px solid ${colors.blackTexts.cardBorderColor};
    }

    .fold {
      border-top-right-radius: ${colors.blackTexts.cardBorderColor};
      border: 0.5px solid ${colors.blackTexts.cardBorderColor};
      border-bottom: 0.5px solid ${colors.blackTexts.cardBorderColor};
    }

    .upperCard,
    .lowerCard {
      color: ${colors.blackTexts.cardFontColor};
      border: 1px solid ${colors.blackTexts.cardBorderColor};
    }

    .upperCard {
      border-bottom: 0.5px solid ${colors.blackTexts.cardBorderColor};
    }

    .lowerCard {
      border-top: 0.5px solid ${colors.blackTexts.cardBorderColor};
    }
  `,
  mint: css`
    h1 {
      color: #00ddec;
    }

    h3 {
      color: #8266d3;
    }

    h2,
    h4,
    p {
      color: #0099c2;
    }

    .FlipUnitContainer,
    .fold,
    .unfold {
      color: ${colors.mint.cardFontColor};
      background: ${colors.mint.cardColor};
    }

    .unfold {
      color: ${colors.mint.cardFontColor};
      border: 0.5px solid ${colors.mint.cardBorderColor};
      border-top: 0.5px solid ${colors.mint.cardBorderColor};
    }

    .fold {
      border-top-right-radius: ${colors.mint.cardBorderColor};
      border: 0.5px solid ${colors.mint.cardBorderColor};
      border-bottom: 0.5px solid ${colors.mint.cardBorderColor};
    }

    .upperCard,
    .lowerCard {
      color: ${colors.mint.cardFontColor};
      border: 1px solid ${colors.mint.cardBorderColor};
    }

    .upperCard {
      border-bottom: 0.5px solid ${colors.mint.cardBorderColor};
    }

    .lowerCard {
      border-top: 0.5px solid ${colors.mint.cardBorderColor};
    }
  `,
};
