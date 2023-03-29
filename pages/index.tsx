import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@compontens/styles/Home.module.css";
import CountDownContainer from "@compontens/components/FlipCountDown/CountDownContainer";
import FlightDetails from "@compontens/components/FlightDetails";
import { css } from "@emotion/react";
import {
  borderColor,
  cardColor,
  fontColor,
} from "@compontens/components/FlipCountDown/FlipCountDown.style";
import { themes } from "@compontens/styles/themes";

export default function Home() {
  return (
    <>
      <Head>
        <title>Lost in translation</title>
        <meta name="description" content="Time left to departure to Tokyo" />
      </Head>
      <main
        css={[
          css`
            height: 100vh;
            width: 100vw;
            place-items: center;
            display: flex;
            flex-flow: column;
            justify-content: center;
            align-items: center;
          `,
          themes.mint,
        ]}
      >
        <CountDownContainer
          title="Lost in translation"
          remainingText="Tid kvar till avgång"
          timeStamp={new Date("2023-09-15 08:55").getTime()}
          renderSpecific={() => <FlightDetails />}
        />
      </main>
    </>
  );
}
