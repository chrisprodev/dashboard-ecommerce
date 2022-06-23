import React from "react";
import styled from "styled-components";
import Sidebar from "../components/Sidebar";

const App: React.FC = () => {
  return (
    <AppContainer>
      <Sidebar />
    </AppContainer>
  );
};

export default App;

const AppContainer = styled.main`
  display: flex;
`;
