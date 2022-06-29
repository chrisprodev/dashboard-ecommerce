import React from "react";
import { mockFilters } from "../../../constants/filters";
import { Divider } from "../../../styled-components/Dividers";
import SubscribersList from "./subscribers-list";
import * as Styles from "./styles";

export const Audience: React.FC = () => {
  return (
    <Styles.Container>
      <Styles.Header>
        <h2>Audience</h2>
      </Styles.Header>
      <Divider />
      <Styles.SubContent>
        <h3>Subscribers</h3>
        <Styles.Filters>
          <Styles.AddFilter>
            {mockFilters[0].icon}
            <span>Add Filter</span>
          </Styles.AddFilter>
          {mockFilters.map((filter) => (
            <Styles.Filter key={filter.id}>
              {filter.content}
              {filter.icon}
            </Styles.Filter>
          ))}
        </Styles.Filters>
        <SubscribersList />
      </Styles.SubContent>
    </Styles.Container>
  );
};
