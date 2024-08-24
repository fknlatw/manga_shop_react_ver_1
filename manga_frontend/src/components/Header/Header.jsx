import React,{useContext} from 'react';
import Logo from '../../../public/bg.jpeg';
import "./styles.css";
import {FaCartArrowDown} from 'react-icons/fa';
import { CartContext } from '../../context/CartContext';
import {Link} from 'react-router-dom';

const Header = () => {
    const {handleClick} = useContext(CartContext);
    return <header className="header">
        <div className="headerContainer">
            <img className="logo" src={Logo} alt="" />
            <nav className="nav">
                <ul className="navList">
                    <li ><Link className="navLink" to='/catalog'>Каталог</Link></li>
                    <li><Link className="navLink" to="/">Главная</Link></li>
                    <li><Link className="navLink" to="/about">О нас</Link></li>
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