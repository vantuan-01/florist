import React, { lazy } from 'react';

import styles from '~/components/GlobalStyles/GlobalStyles.module.scss';

const Header = lazy(() => import('~/components/Header'));
const Footer = lazy(() => import('~/components/Footer'));

function HomeLayout({ children }) {
    return (
        <div>
            <Header />
            <div className={styles.container}>{children}</div>
            <Footer />
        </div>
    );
}

export default HomeLayout;
