import {
  BiPlusCircle,
  BiEditAlt,
  BiEnvelope,
  BiLineChart,
  BiChevronDown,
} from "react-icons/bi";

const AllListUserActivities = [
  {
    icon: <BiPlusCircle />,
    text: "Добавить",
    onClick: (evt) => {
      console.log(evt.target.textContent);
    },
    color: "default",
  },
  {
    icon: <BiEditAlt />,
    text: "Править",
    onClick: (evt) => {
      console.log(evt.target.textContent);
    },
    color: "yellow",
  },
  {
    icon: <BiEnvelope />,
    text: "Рассылка",
    onClick: (evt) => {
      console.log(evt.target.textContent);
    },
    color: "red",
  },
  {
    icon: <BiLineChart />,
    text: "Отчеты",
    onClick: (evt) => {
      console.log(evt.target.textContent);
    },
    color: "green",
  },
  {
    icon: <BiChevronDown />,
    text: "Другое",
    onClick: (evt) => {
      console.log(evt.target.textContent);
    },
    color: "gray",
  },
];

export default AllListUserActivities;
