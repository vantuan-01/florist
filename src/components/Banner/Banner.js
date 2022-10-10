import Images from '~/assets/images';
import { Link } from 'react-router-dom';
import React from 'react';
import styles from './Banner.module.scss';

function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.banner_img}>
                <img src={Images.banner} alt="banner" />
            </div>
            <div className={styles.container}>
                <div className={styles.banner_text}>
                    <h1>About us</h1>
                    <div className={styles.banner_link}>
                        <Link>Home</Link>
                        <span>about</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
