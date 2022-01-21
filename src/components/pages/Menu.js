import React from 'react';
import { MenuList } from '../../helpers/MenuList';
import styles from '../../styles/Menu.module.css'
import MenuItem from '../MenuItem';
const Menu = () => {
    return (
        <div className={styles.menu}>
                <h1 className={styles.menuTitle}>Menu</h1>
                <div className={styles.menuList}>
                    {MenuList.map(({name, image, price}) => (
                        <MenuItem 
                            name={name}
                            image={image}
                            price={price}
                            styles={styles}
                        />
                    ))}
                </div>
        </div>
    )
}

export default Menu
