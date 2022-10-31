import { lazy } from 'react';
import styles from '~/components/GlobalStyles/GlobalStyles.module.scss';

const Banner = lazy(() => import('~/components/Banner'));
const Header = lazy(() => import('~/components/Header'));
const Footer = lazy(() => import('~/components/Footer'));

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
