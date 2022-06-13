import "./App.css";
import DefaultBtn from "./UI-library/buttons/DefaultBtn";
import AllListUserActivities from "./consts/allUserActivities";

function App() {
  return (
    <div className="App">
      {AllListUserActivities.map((btnItem, index) => (
        <DefaultBtn key={index} data={btnItem} />
      ))}
    </div>
  );
}

export default App;
