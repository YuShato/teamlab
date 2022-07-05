import { mockCities } from '../../constants/mockCities';
import DropDownList from '../DropDownList';
import Search from '../Search';
import { HeaderWrapper } from './styles';

const Header = () => {
    return (
        <HeaderWrapper>
            <DropDownList citiesListArray={mockCities} />
            <Search />
        </HeaderWrapper>
    );
};

export default Header;