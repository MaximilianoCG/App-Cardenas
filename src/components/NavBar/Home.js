import React from 'react';
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavBarElementos';
import CartWidget from '../CartWidget/CartWidget';
import ItemList from '../itemList/ItemList';

const Navbar = () => {
    return (
        <>
            <Nav>
                <ItemList/>
                <NavLink to="/">
                    <h1>Logo</h1>
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to="/about" activeStyle>
                        Sobre
                    </NavLink>
                    <NavLink to="/Services" activeStyle>
                        Servicios
                    </NavLink>
                    <NavLink to="/contact" activeStyle>
                        Contactanos
                    </NavLink>
                    <NavLink to="/sign-up" activeStyle>
                        Unete
                    </NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/signin">Unirse</NavBtnLink>
                </NavBtn>
                <CartWidget/>
            </Nav>
        </>
    )
}

export default Navbar
