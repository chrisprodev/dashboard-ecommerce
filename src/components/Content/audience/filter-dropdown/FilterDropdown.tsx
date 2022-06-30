import React, { useState } from "react";
import styled from "styled-components";
import { Flex } from "../../../../styled-components/Alignment";
import { CheckContainer } from "../../../../styled-components/Inputs";
import { Text12SemiBold } from "../../../../styled-components/Typography";

export const FilterDropdown: React.FC<{ icon: any }> = ({
  icon,
}) => {
  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <>
      <Container>
        <AddFilter onClick={() => setOpenDropdown(!openDropdown)}>
          {icon}
          <span>Add Filter</span>
        </AddFilter>
        {openDropdown && (
          <DropdownMenu>
            <Text12SemiBold>Status</Text12SemiBold>
            <ul>
              <li>
                <Flex>
                  <CheckContainer>
                    <input type="checkbox" />
                  </CheckContainer>
                  <span>Active</span>
                </Flex>
              </li>
              <li>
                <Flex>
                  <CheckContainer>
                    <input type="checkbox" />
                  </CheckContainer>
                  <span>Inactive</span>
                </Flex>
              </li>
            </ul>
            <Text12SemiBold>Source</Text12SemiBold>
            <ul>
              <li>
                <Flex>
                  <CheckContainer>
                    <input type="checkbox" />
                  </CheckContainer>
                  <span>Google</span>
                </Flex>
              </li>
              <li>
                <Flex>
                  <CheckContainer>
                    <input type="checkbox" />
                  </CheckContainer>
                  <span>Facebook</span>
                </Flex>
              </li>
              <li>
                <Flex>
                  <CheckContainer>
                    <input type="checkbox" />
                  </CheckContainer>
                  <span>Instagram</span>
                </Flex>
              </li>
            </ul>
          </DropdownMenu>
        )}
      </Container>
    </>
  );
};

const Container = styled.div`
  position: relative;
`;

const AddFilter = styled.span`
  cursor: pointer;
  user-select: none;
  display: flex;
  align-items: center;
  border: solid 2px var(--gray-200);
  font-weight: 500;
  padding: 5px 10px;
  border-radius: 5px;

  svg {
    color: var(--gray-600);
    height: 18px;
    width: auto;
    transform: rotate(45deg);
  }

  span {
    margin-left: 10px;
  }

  :hover {
    background: var(--gray-100);
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 52px;
  left: 0;
  padding: 20px;
  background: var(--white);
  border-radius: 10px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  p {
    margin-top: 10px;
  }

  p:first-child {
    margin-top: 0;
  }

  ul {
    margin: 10px 0 0 0;
    padding: 0;
    list-style: none;

    li {
      cursor: pointer;
      line-height: 2;

      span {
        margin-right: 10px;
      }

      span:last-child {
        margin-left: 0;
      }

      :hover {
        color: var(--blue-700);
      }
    }
  }
`;
