import React from "react";
import { mockFilters } from "../../constants/filters";
import { Divider } from "../../styled-components/Dividers";
import SubscribersList from "../SubscribersList";
import {
  AddFilter,
  Container,
  Filter,
  Filters,
  Header,
  SubContent,
} from "./styles";

export const Audience: React.FC = () => {
  return (
    <Container>
      <Header>
        <h2>Audience</h2>
      </Header>
      <Divider />
      <SubContent>
        <h3>Subscribers</h3>
        <Filters>
          <AddFilter>
            {mockFilters[0].icon}
            <span>Add Filter</span>
          </AddFilter>
          {mockFilters.map((filter) => (
            <Filter key={filter.id}>
              {filter.content}
              {filter.icon}
            </Filter>
          ))}
        </Filters>
        <SubscribersList />
      </SubContent>
    </Container>
  );
};
