import { css } from "@emotion/react";

interface Props {
  time: Date;
  airport: string;
  type: "departure" | "arrival";
}

const FlightDetail: React.FC<Props> = ({ time, airport, type }) => {
  return (
    <p>
      {time.toLocaleString("sv-SE", {
        dateStyle: "long",
        timeStyle: "short",
      })}{" "}
      {airport}
    </p>
  );
};

export default FlightDetail;
