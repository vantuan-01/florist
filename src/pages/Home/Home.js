import Images from '~/assets/images';
import { Link } from 'react-router-dom';
import config from '~/config/routes';
import styles from './Home.module.scss';

function Home() {
    return (
        <div className={styles.home}>
            <div className={styles.carousel_container}>
                <div className={styles.carousel_inner}>
                    <img src={Images.slider1} alt="carousel" />

                    <div className={styles.carousel_text}>
                        <span>fresh flower & gift shop</span>
                        <h1>Making beautiful flowers a part of your life </h1>
                        <Link to={config.product}>shop now</Link>
                    </div>
                </div>
            </div>
            <div className={styles.padding_side}>
                <div className={styles.row}>
                    <div className={styles.reputation}>
                        <div className={styles.reputation_inner}>
                            <img src={Images.benefit1} alt="benefit" />
                            <div className={styles.reputation_text}>
                                <h2>100% Freshness</h2>
                                <span>Most people are unaware of the less common flower</span>
                            </div>
                        </div>
                        <div className={styles.reputation_inner}>
                            <img src={Images.benefit2} alt="benefit" />
                            <div className={styles.reputation_text}>
                                <h2>Made by artist</h2>
                                <span>Most people are unaware of the less common flower</span>
                            </div>
                        </div>
                        <div className={styles.reputation_inner}>
                            <img src={Images.benefit3} alt="benefit" />
                            <div className={styles.reputation_text}>
                                <h2>Own courier</h2>
                                <span>Most people are unaware of the less common flower</span>
                            </div>
                        </div>
                        <div className={styles.reputation_inner}>
                            <img src={Images.benefit4} alt="benefit" />
                            <div className={styles.reputation_text}>
                                <h2>100% Freshness</h2>
                                <span>Most people are unaware of the less common flower</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.categories}>
                        <div className={styles.categories_inner}>
                            <img src={Images.flower} alt="categories" />
                            <div className={styles.categories_text}>
                                <h2>Fresh flower</h2>
                            </div>
                        </div>
                        <div className={styles.categories_inner}>
                            <img src={Images.succulent} alt="categories" />
                            <div className={styles.categories_text}>
                                <h2>Succulent plants</h2>
                            </div>
                        </div>
                        <div className={styles.categories_inner}>
                            <img src={Images.catus} alt="categories" />
                            <div className={styles.categories_text}>
                                <h2>Cactus plants</h2>
                            </div>
                        </div>
                        <div className={styles.categories_inner}>
                            <img src={Images.funiture} alt="categories" />
                            <div className={styles.categories_text}>
                                <h2>Funiture tree</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
