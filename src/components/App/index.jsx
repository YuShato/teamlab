import styled from "styled-components";
import Header from "../Header";
import MainLayout from "../Layouts/MainLayout";

/**
 * App component.
 *
 * @type {React.FC<Props>}
 * @returns {React.ReactElement} Возвращает JSX-компонент приложения.
 */

const App = () => {
  return (
    <MainLayout>
      <Header/>
      <Test2>nav</Test2>
      <Test3>main</Test3>
    </MainLayout>
  );
};

const Test2 = styled.div`
  grid-area: nav;
  background: yellow;
`;
const Test3 = styled.div`
  grid-area: main;
  background: purple;
`;

export default App;
