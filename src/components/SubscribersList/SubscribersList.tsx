import React from "react";
import useSubscribers from "../../hooks/useSubscribers";

export const SubscribersList: React.FC = () => {
  const { loading, error, data } = useSubscribers();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Something goes wrong.</div>;

  return (
    data &&
    data.map((subscriber: any) => (
      <p key={subscriber.id}>{subscriber.name}</p>
    ))
  );
};
