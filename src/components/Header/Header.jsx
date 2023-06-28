import React from "react";
import UserMenu from "components/UserMenu/UserMenu";

const Header = () => {
    return (
        <header>
            <h1>Phonebook</h1>
            <UserMenu/>
        </header>
    )
}

export default Header;