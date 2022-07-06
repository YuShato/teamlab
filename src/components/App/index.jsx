import styled from "styled-components";
import { NavLinksData } from "../../constants/navLinksData";
import Header from "../Header";
import MainLayout from "../Layouts/MainLayout";
import Navigation from "../Navigation";

/**
 * App component.
 *
 * @type {React.FC<Props>}
 * @returns {React.ReactElement} Возвращает JSX-компонент приложения.
 */

const App = () => {
  return (
    <MainLayout>
      <Header />
      <Navigation navLinksDataArray={NavLinksData} />
      <Test3>main</Test3>
    </MainLayout>
  );
};

const Test3 = styled.div`
  grid-area: main;
  background: purple;
`;

export default App;
