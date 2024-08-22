import React,{useContext} from 'react';
import Logo from '../../../public/bg.jpeg';
import "./styles.css";
import {FaCartArrowDown} from 'react-icons/fa';
import { CartContext } from '../../context/CartContext';

const Header = () => {
    const {handleClick} = useContext(CartContext);
    return <header className="header">
        <div className="headerContainer">
            <img className="logo" src={Logo} alt="" />
            <nav className="nav">
                <ul className="navList">
                    <li className="navLink"><a href="">Каталог</a></li>
                    <li><a className="navLink" href="">Главная</a></li>
                    <li><a className="navLink" href="">О нас</a></li>
                    <li>
                        <button onClick={handleClick} className="navCartButton">
                            <FaCartArrowDown/>
                        </button>
                    </li>
                </ul> 
            </nav>
        </div>
    </header>
} 

export default Header;