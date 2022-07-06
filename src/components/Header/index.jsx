import DropDownList from '../DropDownList';
import Search from '../Search';
import User from '../User';
import { HeaderWrapper } from './styles';
// нижние импорты подгружают моковые данные.
// Это временное решение на время, пока настраивается API
import { mockCities } from '../../constants/mockData/mockCities';
import { mockIsAuthLoaded } from '../../constants/mockData/mockIsAuthLoaded';
import { mockUser } from '../../constants/mockData/mockUser';
/**
 * Header component.
 *
 * @type {React.FC<Props>}
 * @returns {React.ReactElement} Возвращает JSX-компонент Header.
 */

const Header = () => {
    return (
        <HeaderWrapper>
            <DropDownList citiesListArray={mockCities} />
            <Search />
            {/* когда добавится авторизация, сделать замену дефолтного аватара на аватар пользователя */}
            <User isAuthLoaded={mockIsAuthLoaded} authUser={mockUser} />
        </HeaderWrapper>
    );
};

export default Header;