import { DefaultAvatarWrapper } from "./styles";
import { BiUser } from "react-icons/bi";
import EditAvatar from "../EditAvatar";

const DefaultAvatar = () => {
    return (
        <DefaultAvatarWrapper>
            <BiUser />
            <EditAvatar className="edit" />
        </DefaultAvatarWrapper>
    );
};

export default DefaultAvatar;