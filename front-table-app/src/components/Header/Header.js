import React from "react";
import Logo from "../../assets/img/bemobile.png";
import { HeaderTag } from "./styled";


const Header = () => {
    return (
        <HeaderTag>
            <img src={Logo} alt="Logo Be Mobile" />
        </HeaderTag>
    )
}
export default Header;
