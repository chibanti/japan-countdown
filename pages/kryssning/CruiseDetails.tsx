import FlightDetail from "@compontens/components/FlightDetail";
import { css } from "@emotion/react";
import { motion } from "framer-motion";

const CruiseDetails = () => {
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
        time={new Date("2023-06-23 12:05")}
        airport="Landvetter"
        type="departure"
      />
      <FlightDetail
        time={new Date("2023-06-24 17:00")}
        airport="Barcelona - MSC Seaview"
        type="departure"
      />
    </motion.div>
  );
};

export default CruiseDetails;
