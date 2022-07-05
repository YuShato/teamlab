import { DefaultAvatarWrapper } from "./styles";
import { BiUser } from "react-icons/bi";
import EditAvatar from "../EditAvatar";

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
            <EditAvatar className="edit" />
        </DefaultAvatarWrapper>
    );
};

export default DefaultAvatar;