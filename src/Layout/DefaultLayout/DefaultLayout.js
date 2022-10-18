import Banner from '~/components/Banner';
import Footer from '~/components/Footer';
import Header from '~/components/Header';
import styles from '~/components/GlobalStyles/GlobalStyles.module.scss';

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
