import React from 'react';

const MenuItem = ({name, image, price, styles}) => {
  const background = {
      background: `url(${image})`
  }
  return <div className={styles.menuItem} >
      <div style={background}></div>
        <h1>{name}</h1>
        <p>${price}</p>
  </div>;
};

export default MenuItem;
