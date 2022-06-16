import "./App.css";
import AllListUserActivities from "./consts/allUserActivities";
import Navigation from "./UI-library/menu/Navigation";
import MessageItem from "./UI-library/messages/MessageItem";
import BtnWrapper from "./UI-library/wrappers/BtnWrapper";

const message = {
  text: "Абонемент заканчивается 13.06.2026. Через 3 дня Вы не сможете записаться на занятие",
  action: "Продлить",
};

const messagesMockArray = [
  {
    status: "warning",
    text: "Абонемент заканчивается 13.06.2026. Через 3 дня Вы не сможете записаться на занятие",
    action: "Продлить",
  },
  {
    status: "success",
    text: "Абонемент успешно продлен",
    action: "Записаться",
  },
  {
    status: "mistake",
    text: "Тариф закончился. Вы не можете записаться на занятия.",
    action: "Купить",
  },
  {
    status: "error",
    text: "Нет интернет соединения",
    action: null,
  },
];

function App() {
  return (
    <div className="App">
      <Navigation />
      <BtnWrapper btnsArray={AllListUserActivities} />
      <MessageItem message={message} />
    </div>
  );
}

export default App;
