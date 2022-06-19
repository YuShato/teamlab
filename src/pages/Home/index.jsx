import { Container, Main } from "../../components/App/styles";
import AllListUserActivities from "../../consts/allUserActivities";
import Navigation from "../../UI-library/menu/Navigation";
import MessageItem from "../../UI-library/messages/MessageItem";
import BtnWrapper from "../../UI-library/wrappers/BtnWrapper";
import Header from "../../UI-library/header/Header";

const mockMessage = {
  text: "Абонемент заканчивается 13.06.2026. Через 3 дня Вы не сможете записаться на занятие",
  action: "Продлить",
};

function HomePage() {
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

export default HomePage;
