import { DefaultAvatarWrapper } from "./styles";
import { BiUser } from "react-icons/bi";

/**
 * DefaultAvatar component.
 *
 * @type {React.FC<Props>}
 * @returns {React.ReactElement} Возвращает JSX-компонент иконки (стрелка вправо).
 */

const DefaultAvatar = () => {
    return (
        <DefaultAvatarWrapper>
            <BiUser />
            {/* добавить сюда компонент замены аватара на авaтар пользователя.
             Компонент должен проверять, авторизован ли пользователь и при том что он авторизован и загрузил новый аватар,
             данные должны отправляться на сервер и храниться там */}
        </DefaultAvatarWrapper>
    );
};

export default DefaultAvatar;