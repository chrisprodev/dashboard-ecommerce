import { useEffect, useState } from "react";

interface State {
  loading: boolean;
  data: any | null;
  error: any | null;
}

const useSubscribers = () => {
  const [users, setUsers] = useState<State>({
    loading: true,
    data: null,
    error: null,
  });

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const result = await response.json();
        setUsers({
          loading: false,
          data: result.map((dataItem: any) => ({
            id: dataItem.id,
            name: dataItem.name,
            email: dataItem.id,
            website: dataItem.website,
            city: dataItem.address.city,
            status: true,
          })),
          error: null,
        });
      } catch (err: any) {
        setUsers({
          loading: false,
          data: null,
          error: err.message,
        });
      }
    };

    getUsers();
  }, []);

  return users;
};

export default useSubscribers;
