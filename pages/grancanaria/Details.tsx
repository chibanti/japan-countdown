import FlightDetail from "@compontens/components/FlightDetail";
import { css } from "@emotion/react";
import { motion } from "framer-motion";

const Details = () => {
  return (
    <motion.div
      css={css`
        margin-top: 3rem;
      `}
      initial={{ opacity: 0, y: 200, scale: 0 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1, ease: "easeIn" }}
    >
      <FlightDetail
        time={new Date("2024-12-14 08:00")}
        airport="Landvetter - Flight DK 1826"
        type="departure"
      />
    </motion.div>
  );
};

export default Details;
