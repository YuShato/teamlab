import { UserWrapper, UserEmail, UserName } from "./styles";
import { Routes } from "../../constants/routes";
import { Link } from "react-router-dom";
import DefaultAvatar from "../DefaultAvatar";
import PropTypes from "prop-types";
import InitialsAvatar from 'react-initials-avatar';
import 'react-initials-avatar/lib/ReactInitialsAvatar.css';

/**
 * The User properties.
 *
 * @typedef {object} Props
 * @property {object} authUser - данные пользователя, загруженные с сервера. 
 * @property {boolean} isAuthLoaded - статус загрузки авторизации, процесс получения данных с сервера
 */

/**
 * User component.
 * JSX-компонент, принимает статус загрузки данных авторизации и полученные данные пользователя. 
 * @type {React.FC<Props>}
 * @returns {React.ReactElement} Возвращает JSX-элемент Юзера (фото, имя+фамилия, email). Используется в Header
 */

const User = ({ authUser, isAuthLoaded }) => {
    return (
        <UserWrapper>
            {isAuthLoaded && authUser && (
                <>
                    {authUser.photo ? (
                        <>
                            {/* <img className="user-avatar" src={authUser.photo.id} alt="аватар" width={46} height={46} /> */}
                            <InitialsAvatar name={`${authUser.firstName} ${authUser.lastName}`}/>
                            {/* сюда добавить компонент, который будет позволять загружать новый аватар пользователя (EditAvatar) */}
                        </>
                    ) : (
                        <DefaultAvatar />
                    )}

                    <Link to={Routes.profile} title="Посмотреть профиль">
                        <UserName>
                            {authUser.firstName} {authUser.lastName}
                        </UserName>
                        <UserEmail>{authUser.email ? authUser.email : "Почта не указана"}</UserEmail>
                    </Link>
                </>
            )}
        </UserWrapper>
    );
};

User.propTypes = {
    "isAuthLoaded": PropTypes.bool.isRequired,
    "authUser": PropTypes.shape({
        "name": PropTypes.string,
        "email": PropTypes.string,
        "password": PropTypes.string,
        "firstName": PropTypes.string,
        "lastName": PropTypes.string,
        "photo": PropTypes.shape({
            "id": PropTypes.string
        }),
        "role": PropTypes.shape({
            "id": PropTypes.number,
            "name": PropTypes.string
        }),
        "status": PropTypes.shape({
            "id": PropTypes.number,
            "name": PropTypes.string
        })
    })

};

export default User;