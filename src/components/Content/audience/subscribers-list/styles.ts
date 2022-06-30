import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 50px 267px 300px 162px 160px 220px auto;
  padding: 12px;
  align-items: center;
  border-bottom: solid 2px var(--gray-100);
`;

export const Name = styled.span`
  font-size: 16px;
  font-weight: 600;
`;

export const Text = styled.span`
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 400;
  color: var(--gray-500);
`;

export const StatusBadge = styled.span`
  background: var(--green-400);
  color: var(--green-800);
  padding: 5px 15px;
  border-radius: 5px;
  font-weight: 500;
  width: 124px;
`;

export const OptionsSVG = styled.svg`
  cursor: pointer;
  width: 20px;
  height: auto;
  justify-self: end;
`;
