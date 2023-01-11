import Footer from '~/components/Footer';
import Header from '~/components/Header';
import React from 'react';
import styles from '~/components/GlobalStyles/GlobalStyles.module.scss';

function HomeLayout({ children }) {
    return (
        <div className={styles.wrapper}>
            <Header />
            <div className={styles.container_home}>{children}</div>
            <Footer />
        </div>
    );
}

export default HomeLayout;
