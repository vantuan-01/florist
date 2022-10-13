import Banner from '~/components/Banner';
import Footer from '~/components/Footer';
import Header from '~/components/Header';
import styles from '~/components/GlobalStyles/GlobalStyles.module.scss';

function DefaultLayout({ children }) {
    return (
        <div className={styles.wrapper}>
            <Header />
            <Banner />
            <div className={styles.container}>
                <div>{children}</div>
            </div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
