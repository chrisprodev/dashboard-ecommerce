import React from "react";
import styled from "styled-components";

const ChevronDown: React.FC<{
  size: string;
  marginLeft?: string;
}> = ({ size, marginLeft }) => {
  return (
    <IconContainer
      size={size}
      marginLeft={marginLeft}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19 9l-7 7-7-7"
      />
    </IconContainer>
  );
};

export default ChevronDown;

const IconContainer = styled.svg<{
  size: string;
  marginLeft?: string;
}>`
  width: ${({ size }) => (size ? size + "px" : "")};
  margin-left: ${({ marginLeft }) =>
    marginLeft ? marginLeft + "px" : "none"};
`;
