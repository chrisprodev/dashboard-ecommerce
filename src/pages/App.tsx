import React from "react";
import styled from "styled-components";
import { Content } from "../components/Content/Content";
import Sidebar from "../components/Sidebar";

const App: React.FC = () => {
  return (
    <AppContainer>
      <Sidebar />
      <Content />
    </AppContainer>
  );
};

export default App;

const AppContainer = styled.main`
  display: flex;
`;
