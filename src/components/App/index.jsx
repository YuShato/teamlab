import Routes from "../../routes/Routes";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { Paths } from "../../consts/paths";
import HomePage from "../../pages/Home";
import LoginPage from "../../pages/Login";

const App = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const onLogOut = () => {
    auth.logOut();
    navigate(Paths.login);
  };
  console.log(`
    email: user@example.com
    password: userpassword$
  `);
  console.log(auth);

  return (
    <div>
      {auth.isLoaded && (auth.user ? <HomePage /> : <LoginPage />)}
      <Routes />
    </div>
  );
};

export default App;
