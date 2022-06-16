// пути из главного меню слева
import {
  BiCalendar,
  BiDollarCircle,
  BiEditAlt,
  BiEnvelope,
  BiFace,
  BiGitCompare,
  BiGroup,
  BiHomeAlt,
  BiLineChart,
  BiListCheck,
  BiMessageRounded,
  BiTask,
  BiPen,
  BiCog,
} from "react-icons/bi";

export const MenuLinks = [
  {
    path: "/",
    icon: <BiHomeAlt />,
    name: "Главная",
    isActive: true,
  },
  {
    path: "/shedule",
    icon: <BiCalendar />,
    name: "Расписание",
    isActive: false,
  },
  {
    path: "/attendance",
    icon: <BiListCheck />,
    name: "Посещения",
    isActive: false,
  },
  {
    path: "/records",
    icon: <BiEditAlt />,
    name: "Записи",
    isActive: false,
  },
  {
    path: "/tasks",
    icon: <BiTask />,
    name: "Задачи",
    isActive: false,
  },
  {
    path: "/students",
    icon: <BiFace />,
    name: "Ученики",
    isActive: false,
  },
  {
    path: "/teachers",
    icon: <BiGroup />,
    name: "Педагоги",
    isActive: false,
  },
  {
    path: "/lessons",
    icon: <BiPen />,
    name: "Занятия",
    isActive: false,
  },
  {
    path: "/mail",
    icon: <BiEnvelope />,
    name: "Связь",
    isActive: false,
  },
  {
    path: "/finance",
    icon: <BiDollarCircle />,
    name: "Финансы",
    isActive: false,
  },
  {
    path: "/analytics",
    icon: <BiLineChart />,
    name: "Аналитика",
    isActive: false,
  },
  {
    path: "/informer",
    icon: <BiMessageRounded />,
    name: "Информер",
    isActive: false,
  },
  {
    path: "/access",
    icon: <BiGitCompare />,
    name: "Доступ в CRM",
    isActive: false,
  },
  {
    path: "/settings",
    icon: <BiCog />,
    name: "Настройки",
    isActive: false,
  },
];
