import React, { useEffect, useState } from 'react';

import Images from '~/assets/images';
import { Link } from 'react-router-dom';
import config from '~/config/routes';
import styles from './Banner.module.scss';

function Banner() {
    const [bannerText, setBannerText] = useState('');
    const presentURL = window.location.href.slice(22);

    useEffect(() => {
        if (bannerText !== presentURL) {
            setBannerText(presentURL);
        }
    });

    return (
        <div className={styles.banner}>
            <div className={styles.banner_img}>
                <img src={Images.banner} alt="banner" />
            </div>
            <div className={styles.container}>
                <div className={styles.banner_text}>
                    <h1>{presentURL}</h1>
                    <div className={styles.banner_link}>
                        <Link to={config.home}>Home</Link>
                        <span>{presentURL}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
