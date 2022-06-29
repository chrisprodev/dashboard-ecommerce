import React from "react";
import * as Styles from "./styles";

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
    <Styles.Container onClick={onSelect} active={active}>
      {icon}
      <span>{name}</span>
    </Styles.Container>
  );
};
