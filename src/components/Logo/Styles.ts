import styled from "styled-components";

export const LogoContainer = styled.div`
  margin-left: 5px;
  display: flex;
  align-items: center;
`;

export const LogoTitle = styled.span`
  font-size: 20px;
  font-weight: 700;
  color: var(--gray-600);
  margin-left: 10px;
`;

export const IconWrapper = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--blue-700);
  padding: 10px;
  border-radius: 10px;

  svg {
    height: 24px;
    width: auto;
    color: var(--white);
  }
`;
