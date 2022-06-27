import React from "react";
import styled from "styled-components";
import useSubscribers from "../../hooks/useSubscribers";
import ChevronDown from "../../icons/ChevronDown";

export const SubscribersList: React.FC = () => {
  const { loading, error, data } = useSubscribers();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Something goes wrong.</div>;

  return (
    <>
      <Container>
        <CheckContainer>
          <input type="checkbox" />
        </CheckContainer>
        <Text>
          Full name <ChevronDown size="18" marginLeft="10" />
        </Text>
        <Text>
          Email address
          <ChevronDown size="18" marginLeft="10" />
        </Text>
        <Text>
          Status
          <ChevronDown size="18" marginLeft="10" />
        </Text>
        <Text>
          Website
          <ChevronDown size="18" marginLeft="10" />
        </Text>
        <Text>
          City
          <ChevronDown size="18" marginLeft="10" />
        </Text>
      </Container>
      {data &&
        data.map((subscriber: any) => (
          <Container key={subscriber.id}>
            <CheckContainer>
              <input type="checkbox" />
            </CheckContainer>
            <Name>{subscriber.name}</Name>
            <Text>{subscriber.email}</Text>
            <StatusBadge>Subscribed</StatusBadge>
            <Text>{subscriber.website}</Text>
            <Text>{subscriber.address.city}</Text>
            <OptionsSVG
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
              />
            </OptionsSVG>
          </Container>
        ))}
    </>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: 50px 267px 300px 162px 160px 220px auto;
  padding: 12px;
  align-items: center;
  border-bottom: solid 2px var(--gray-100);
`;

const Name = styled.span`
  font-size: 16px;
  font-weight: 600;
`;

const Text = styled.span`
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 400;
  color: var(--gray-500);
`;

const StatusBadge = styled.span`
  background: var(--green-400);
  color: var(--green-800);
  padding: 5px 15px;
  border-radius: 5px;
  font-weight: 500;
  width: 124px;
`;

const OptionsSVG = styled.svg`
  cursor: pointer;
  width: 20px;
  height: auto;
  justify-self: end;
`;

const CheckContainer = styled.span`
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
