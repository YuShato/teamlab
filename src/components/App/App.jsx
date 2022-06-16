import styled from "styled-components";
import AllListUserActivities from "../../consts/allUserActivities";
import Navigation from "../../UI-library/menu/Navigation";
import MessageItem from "../../UI-library/messages/MessageItem";
import BtnWrapper from "../../UI-library/wrappers/BtnWrapper";
import Header from "../../UI-library/header/Header";

const mockMessage = {
  text: "Абонемент заканчивается 13.06.2026. Через 3 дня Вы не сможете записаться на занятие",
  action: "Продлить",
};

function App() {
  return (
    <Container>
      <Navigation />
      <Header />
      <Main>
        <BtnWrapper btnsArray={AllListUserActivities} />
        <MessageItem message={mockMessage} />
      </Main>
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-areas:
    "nav head"
    "nav main"
    "nav main";
  grid-template-rows: 60px 1fr;
  grid-template-columns: 250px 1fr;
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
`;

const Main = styled.main`
  grid-area: main;
  background-color: #F5F6F8;
`;

export default App;
