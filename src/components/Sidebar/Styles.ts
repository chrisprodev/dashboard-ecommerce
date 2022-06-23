import styled from "styled-components";
import { baseList } from "../../styles/defaults";

export const SidebarContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: var(--gray-100);
  padding: 25px;
  height: 100vh;
  width: 340px;
`;

export const MenuList = styled.ul`
  ${baseList}
  margin: 25px 0 0 0;

  li {
    margin-top: 5px;
  }

  li:first-child {
    margin-top: 0;
  }
`;

export const Divider = styled.div`
  margin: 15px 0;
  height: 2px;
  width: 100%;
  background: var(--gray-50);
`;

export const Options = styled.ul`
  ${baseList}
  display: flex;
  flex-direction: column;
`;

export const OptionItem = styled.li`
  cursor: pointer;
  padding: 15px;
  display: flex;
  border-radius: 10px;
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

export const TopMenu = styled.div`
  display: flex;
  flex-direction: column;
`;
