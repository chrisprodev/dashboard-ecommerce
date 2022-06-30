import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;

  h2 {
    margin: 0;
    font-size: 30px;
  }
`;

export const SubContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;

  h3 {
    margin: 0;
    font-size: 26px;
  }
`;

export const Filters = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 25px;
  padding-bottom: 35px;
`;

export const Filter = styled.span`
  display: flex;
  align-items: center;
  background: var(--gray-100);
  padding: 5px 10px;
  border-radius: 5px;
  white-space: pre-wrap;
  color: var(--gray-300);

  span {
    color: var(--gray-600);
  }

  svg {
    cursor: pointer;
    margin-left: 10px;
    color: var(--gray-600);
    height: 18px;
    width: auto;
  }
`;
