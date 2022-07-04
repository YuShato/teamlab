import styled from "styled-components";
import MainLayout from "../Layouts/MainLayout";

const App = () => {
  return (
    <MainLayout>
      <Test1>header</Test1>
      <Test2>nav</Test2>
      <Test3>main</Test3>
    </MainLayout>
  );
};

const Test1 = styled.div`
  grid-area: head;
  background: blue;
`;
const Test2 = styled.div`
  grid-area: nav;
  background: yellow;
`;
const Test3 = styled.div`
  grid-area: main;
  background: purple;
`;

export default App;
