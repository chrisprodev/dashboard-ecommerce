import React from "react";
import styled from "styled-components";
import { Content } from "../components/content/Content";
import Sidebar from "../components/sidebar";

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
