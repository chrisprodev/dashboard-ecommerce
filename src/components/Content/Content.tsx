import React from "react";
import Audience from "../Audience";
import { Container } from "./styles";

const displayContent = 4;

export const Content: React.FC = () => {
  return (
    <Container>{displayContent === 4 && <Audience />}</Container>
  );
};
