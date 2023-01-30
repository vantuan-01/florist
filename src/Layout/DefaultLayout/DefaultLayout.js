import { selectTotalPrice, selectTotalQty } from '~/reducers/Cart';

import Banner from '~/components/Banner';
import Footer from '~/components/Footer';
import Header from '~/components/Header';
import Loading from '~/components/Loading';
import { selectLogged } from '~/reducers/Login';
import styles from '~/components/GlobalStyles/GlobalStyles.module.scss';
import { useSelector } from 'react-redux';

function DefaultLayout({ children, banner }) {
    return (
        <div className={styles.wrapper}>
            <Header />
            <Banner banner={banner} />
            <div className={styles.container}>{children}</div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
