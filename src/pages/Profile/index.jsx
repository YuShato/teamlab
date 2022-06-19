import { Container, Main } from "../../components/App/styles";
import Navigation from "../../UI-library/menu/Navigation";
import Header from "../../UI-library/header/Header";

function Profile() {
  return (
    <Container>
      <Navigation />
      <Header />
      <Main>
        user profile
        <p>мтраница в разработке</p>
      </Main>
    </Container>
  );
}

export default Profile;
