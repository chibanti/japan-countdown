import Head from "next/head";
import CountDownContainer from "@compontens/components/FlipCountDown/CountDownContainer";
import Details from "@compontens/pages/grancanaria/Details";
import { css } from "@emotion/react";
import { themes } from "@compontens/styles/themes";
export default function Kryssning() {
  return (
    <>
      <Head>
        <title>Gran Canaria</title>
        <meta
          name="description"
          content="Time left to departure Gran Canaria"
        />
      </Head>
      <div
        css={css`
          height: 100vh;
          width: 100vw;
          background: url(/servatur_puerto_azul_2.jpg) no-repeat center center
            fixed;
          background-size: cover;
        `}
      >
        <main css={themes.blackTexts}>
          <CountDownContainer
            title="Gran Canaria"
            subTitle="Servatur Puerto Azul"
            remainingText="Tid kvar till resan"
            timeStamp={new Date("2024-12-14 08:00").getTime()}
            renderSpecific={() => <Details />}
          />
        </main>
      </div>
    </>
  );
}
