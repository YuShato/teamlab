import { mockCities } from '../../constants/mockCities';
import DropDownList from '../DropDownList';
import Search from '../Search';
import { HeaderWrapper } from './styles';

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
        </HeaderWrapper>
    );
};

export default Header;