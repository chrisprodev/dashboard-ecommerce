import React, { useState } from "react";
import Logo from "../Logo";
import MenuItem from "../MenuItem";
import { Divider } from "../../styled-components/Dividers";
import { dashMenu, dashOpts } from "../../constants/dashboardMenu";
import {
  MenuList,
  OptionItem,
  Options,
  SidebarContainer,
  TopMenu,
} from "./styles";

export const Sidebar: React.FC = () => {
  const [active, setActive] = useState(4);

  const handleSetActive = (id: number) => {
    setActive(id);
  };

  return (
    <SidebarContainer>
      <TopMenu>
        <Logo />
        <MenuList>
          {dashMenu.map((menuItem) =>
            menuItem.name === "Divider" ? (
              <Divider key={menuItem.id.toString()} />
            ) : (
              <MenuItem
                key={menuItem.id.toString()}
                icon={menuItem.icon}
                name={menuItem.name}
                active={active === menuItem.id}
                onSelect={() => handleSetActive(menuItem.id)}
              />
            )
          )}
        </MenuList>
      </TopMenu>

      <Options>
        {dashOpts.map((optionItem) => (
          <OptionItem key={optionItem.id.toString()}>
            {optionItem.icon}
            <span>{optionItem.name}</span>
          </OptionItem>
        ))}
      </Options>
    </SidebarContainer>
  );
};
