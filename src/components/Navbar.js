import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'
import styles from '../styles/Navbar.module.css';
import ReorderIcon from '@mui/icons-material/Reorder';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handler = () => {
        isOpen? setIsOpen(false) : setIsOpen(true);
        console.log(isOpen);
    }
    return (
        <div className={styles.navbar}>
            <div className={styles.leftSide} >
                {!isOpen && <img src={logo} alt='logo' />}
                {isOpen && <div className={styles.hiddenLinks}>
                    <Link to='/'>Home</Link>
                    <Link to='/menu'>Menu</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/contact'>Contact</Link>
                </div>}
            </div>
            <div className={styles.rightSide}>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/menu'>Menu</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                </ul>
                <button onClick={handler} className={styles.button}><ReorderIcon /></button>
            </div>
        </div>
    )
}

export default Navbar
