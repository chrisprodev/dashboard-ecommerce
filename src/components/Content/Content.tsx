import React from "react";
import Audience from "./audience";
import * as Styles from "./styles";

const displayContent = 4;

export const Content: React.FC = () => {
  return (
    <Styles.Container>
      {displayContent === 4 && <Audience />}
    </Styles.Container>
  );
};
