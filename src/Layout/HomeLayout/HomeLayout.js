import { selectTotalPrice, selectTotalQty } from '~/reducers/Cart';

import Footer from '~/components/Footer';
import Header from '~/components/Header';
import Loading from '~/components/Loading';
import React from 'react';
import { selectLogged } from '~/reducers/Login';
import styles from '~/components/GlobalStyles/GlobalStyles.module.scss';
import { useSelector } from 'react-redux';

function HomeLayout({ children }) {
    const isLogged = useSelector(selectLogged);
    const totalItems = useSelector(selectTotalQty);
    const totalPrices = useSelector(selectTotalPrice);

    if (!totalItems && !totalPrices && isLogged.length !== 0) {
        document.body.style.overflow = 'hidden';
        return <Loading />;
    } else document.body.style.overflow = '';

    return (
        <div className={styles.wrapper}>
            <Header />
            <div className={styles.container_home}>{children}</div>
            <Footer />
        </div>
    );
}

export default HomeLayout;
