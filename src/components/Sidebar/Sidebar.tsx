import React, { useState } from "react";
import Logo from "../logo";
import MenuItem from "./menu-item";
import { Divider } from "../../styled-components/Dividers";
import { dashMenu, dashOpts } from "../../constants/dashboardMenu";
import * as Styles from "./styles";

export const Sidebar: React.FC = () => {
  const [active, setActive] = useState(4);

  const handleSetActive = (id: number) => {
    setActive(id);
  };

  return (
    <Styles.SidebarContainer>
      <Styles.TopMenu>
        <Logo />
        <Styles.MenuList>
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
        </Styles.MenuList>
      </Styles.TopMenu>

      <Styles.Options>
        {dashOpts.map((optionItem) => (
          <Styles.OptionItem key={optionItem.id.toString()}>
            {optionItem.icon}
            <span>{optionItem.name}</span>
          </Styles.OptionItem>
        ))}
      </Styles.Options>
    </Styles.SidebarContainer>
  );
};
