import React from 'react';
import styles from '../../styles/Contact.module.css';

const Contact = () => {
  return( 
  <div className={styles.contact}>
    <div className={styles.leftSide}></div>
    <div className={styles.rightSide}>
      <h1>Contact Us</h1>
      <form>
        <label htmlFor='name'>Full Name</label>
        <input type='text' id='name' placeholder='Enter Your Name'/>
        <br />
        <label htmlFor='email'>E-mail</label>
        <input type='text' id='email' placeholder='Enter Your E-mail'/>
        <br />
        <label htmlFor='message'>Message</label>
        <textarea id='message' placeholder='Enter Your Message' rows='8'/>

        <button type='submit'>Send Message</button>
      </form>
    </div>
  </div>
  );
};

export default Contact;
