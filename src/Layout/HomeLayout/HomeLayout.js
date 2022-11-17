import React, { lazy } from 'react';

import styles from '~/components/GlobalStyles/GlobalStyles.module.scss';

const Header = lazy(() => import('~/components/Header'));
const Footer = lazy(() => import('~/components/Footer'));

function HomeLayout({ children }) {
    return (
        <>
            <Header />
            <div className={styles.container_home}>{children}</div>
            <Footer />
        </>
    );
}

export default HomeLayout;
