import Routes from "../../routes/Routes";
import useAuth from "../../hooks/useAuth";
import HomePage from "../../pages/Home";
import LoginPage from "../../pages/Login";

const App = () => {
  const auth = useAuth();

  console.log(auth);

  return (
    <><Routes>
      {auth.isLoaded && (auth.user ? <HomePage /> : <LoginPage />)}
      </Routes>
    </>
  );
};

export default App;
