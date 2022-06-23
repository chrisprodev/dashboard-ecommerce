import React from "react";
import { Container } from "./Styles";

interface Props {
  active: boolean;
  icon: any;
  name: string;
  onSelect: () => void;
}

export const MenuItem: React.FC<Props> = ({
  active,
  icon,
  name,
  onSelect,
}) => {
  return (
    <Container onClick={onSelect} active={active}>
      {icon}
      <span>{name}</span>
    </Container>
  );
};
