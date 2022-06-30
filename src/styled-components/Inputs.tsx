import styled from "styled-components";

export const CheckContainer = styled.span`
  display: flex;
  align-items: center;
  user-select: none;
  outline: none;

  input[type="checkbox"] {
    display: grid;
    place-content: center;
    appearance: none;
    margin: 0;
    width: 20px;
    height: 20px;
    border: solid 2px var(--gray-200);
    border-radius: 2px;
  }
`;
