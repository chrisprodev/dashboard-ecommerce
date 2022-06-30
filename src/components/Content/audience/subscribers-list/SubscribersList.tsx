import React from "react";
import useSubscribers from "../../../../hooks/useSubscribers";
import ChevronDown from "../../../../icons/ChevronDown";
import * as Styles from "./styles";

export const SubscribersList: React.FC = () => {
  const { loading, error, data } = useSubscribers();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Something goes wrong.</div>;

  return (
    <>
      <Styles.Container>
        <Styles.CheckContainer>
          <input type="checkbox" />
        </Styles.CheckContainer>
        <Styles.Text>
          Full name <ChevronDown size="18" marginLeft="10" />
        </Styles.Text>
        <Styles.Text>
          Email address
          <ChevronDown size="18" marginLeft="10" />
        </Styles.Text>
        <Styles.Text>
          Status
          <ChevronDown size="18" marginLeft="10" />
        </Styles.Text>
        <Styles.Text>
          Website
          <ChevronDown size="18" marginLeft="10" />
        </Styles.Text>
        <Styles.Text>
          City
          <ChevronDown size="18" marginLeft="10" />
        </Styles.Text>
      </Styles.Container>
      {data &&
        data.map((subscriber: any) => (
          <Styles.Container key={subscriber.id}>
            <Styles.CheckContainer>
              <input type="checkbox" />
            </Styles.CheckContainer>
            <Styles.Name>{subscriber.name}</Styles.Name>
            <Styles.Text>{subscriber.email}</Styles.Text>
            <Styles.StatusBadge>
              {subscriber.status ? "Active" : "Inactive"}
            </Styles.StatusBadge>
            <Styles.Text>{subscriber.website}</Styles.Text>
            <Styles.Text>{subscriber.city}</Styles.Text>
            <Styles.OptionsSVG
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
            </Styles.OptionsSVG>
          </Styles.Container>
        ))}
    </>
  );
};
