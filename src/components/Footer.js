import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import styles from '../styles/Footer.module.css';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.socialMedia}>
                <TwitterIcon />
                <InstagramIcon />
                <FacebookIcon />
                <LinkedInIcon />
                <p>&copy; 2022 www.indianfood.com</p>
            </div>
        </div>
    )
}

export default Footer
