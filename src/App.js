import "./App.css";
import AllListUserActivities from "./consts/allUserActivities";
import BtnWrapper from "./UI-library/wrappers/BtnWrapper";

function App() {
  return (
    <div className="App">
      <BtnWrapper btnsArray={AllListUserActivities} />
    </div>
  );
}

export default App;
