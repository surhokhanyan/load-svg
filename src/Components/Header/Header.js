import React from 'react';
import css from "./Header.module.scss";
import Nav from "../Nav/Nav";

const Header = ({setOpenModal, setCharacters, characters}) => {
    return (
        <header className={css.header}>
            <h1>3D Студия</h1>
            <p className={css.subHeader}>Процессы</p>
            <Nav setOpenModal={setOpenModal} characters={characters} setCharacters={setCharacters}/>
        </header>
    );
};

export default Header;