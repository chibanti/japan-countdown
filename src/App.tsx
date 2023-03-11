import "./App.css";
import FlipCountDown from "./FlipCountDown";
import { motion } from "framer-motion";
import { css } from "@emotion/react";
import FlightDetail from "./FlightDetail";

function App() {
  return (
    <div className="App">
      <motion.h1
        initial={{ opacity: 0, y: -50, scale: 0 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, origin: 1, ease: "easeIn" }}
      >
        Lost in translation
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0, y: 50, scale: 0 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, ease: "easeIn" }}
      >
        Tid kvar till avgång
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 200, scale: 0 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, ease: "easeIn" }}
      >
        <FlipCountDown timeStamp={new Date("2023-09-15 08:55").getTime()} />
      </motion.div>
      <motion.div
        css={css`
          margin-top: 3rem;
        `}
        initial={{ opacity: 0, y: 200, scale: 0 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, ease: "easeIn" }}
      >
        <h3
          css={css`
            margin-top: 5rem;
          `}
        >
          Landvetter - Tokyo
        </h3>
        <FlightDetail
          time={new Date("2023-09-15 08:55")}
          airport="Landvetter"
          type="departure"
        />
        <FlightDetail
          time={new Date("2023-09-15 11:50")}
          airport="Helsingfors"
          type="arrival"
        />
        <br />
        <FlightDetail
          time={new Date("2023-09-15 16:40")}
          airport="Helsingfors"
          type="departure"
        />
        <FlightDetail
          time={new Date("2023-09-16 12:55")}
          airport="Tokyo"
          type="arrival"
        />
        <h3
          css={css`
            margin-top: 2rem;
          `}
        >
          Tokyo - Landvetter
        </h3>
        <FlightDetail
          time={new Date("2023-09-23 21:50")}
          airport="Tokyo"
          type="departure"
        />
        <FlightDetail
          time={new Date("2023-09-24 04:40")}
          airport="Helsingfors"
          type="arrival"
        />
        <br />
        <FlightDetail
          time={new Date("2023-09-24 07:30")}
          airport="Helsingfors"
          type="departure"
        />
        <FlightDetail
          time={new Date("2023-09-24 08:30")}
          airport="Landvetter"
          type="arrival"
        />
      </motion.div>
    </div>
  );
}

export default App;
