import Head from "next/head";
import CountDownContainer from "@compontens/components/FlipCountDown/CountDownContainer";
import CruiseDetails from "@compontens/pages/kryssning/CruiseDetails";
import { css } from "@emotion/react";
import { themes } from "@compontens/styles/themes";
export default function Kryssning() {
  return (
    <>
      <Head>
        <title>Båtkryssning</title>
        <meta name="description" content="Time left to departure to Tokyo" />
      </Head>
      <div
        css={css`
          height: 100vh;
          width: 100vw;
          background: url(/msc-seaview.webp) no-repeat center center fixed;
          background-size: cover;
        `}
      >
        <main css={themes.blackTexts}>
          <CountDownContainer
            title="Båtkryssning"
            remainingText="Tid kvar till resan"
            timeStamp={new Date("2023-06-23 12:05").getTime()}
            renderSpecific={() => <CruiseDetails />}
          />
        </main>
      </div>
    </>
  );
}
