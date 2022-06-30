import React from "react";
import * as Styles from "./styles";

export const Logo: React.FC = () => {
  return (
    <Styles.LogoContainer>
      <Styles.IconWrapper>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
          />
        </svg>
      </Styles.IconWrapper>

      <Styles.LogoTitle>Ecomm</Styles.LogoTitle>
    </Styles.LogoContainer>
  );
};
