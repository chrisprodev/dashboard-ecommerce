import styled from "styled-components";

export const Container = styled.li<{ active: boolean }>`
  cursor: pointer;
  padding: 15px;
  display: flex;
  border-radius: 10px;
  background: ${({ active }) => (active ? "var(--white)" : "none")};
  transition: all 75ms ease;

  svg {
    height: 24px;
    width: auto;
    color: var(--gray-300);
  }

  span {
    margin-left: 10px;
    color: var(--gray-600);
    font-weight: 500;
  }

  :hover {
    background: var(--white);
  }
`;
