import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../styles/Home.module.css';

const Home = () => {
    return (
        <div className={styles.home}>
            <div className={styles.headerContainer}>
                <h1>Food Corner</h1>
                <p>INDIAN FOOD AT A CLICK</p>
                <Link to='/Menu'>
                    <button>Order Now</button>
                </Link>
            </div>
        </div>
    )
}

export default Home
