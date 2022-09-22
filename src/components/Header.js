import { Navbar, NavbarBrand } from "reactstrap";
import AnimalRescueFamiliesLogo from '../app/assets/img/logo.png';

const Header = () => {
    return (
        <Navbar dark sticky='top' expand='md'>
            <NavbarBrand href='/'>
                <img src={AnimalRescueFamiliesLogo} alt='animal rescue families logo' />
            </NavbarBrand>
        </Navbar>
    );
};

export default Header;