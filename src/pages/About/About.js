import Images from '~/assets/images';
import { Link } from 'react-router-dom';
import styles from './About.module.scss';

function About() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.about}>
                <div className={styles.about_header}>
                    <div className={styles.title}>
                        <span>about us</span>
                        <h4>We provide all kinds of fresh flower services</h4>
                    </div>
                    <span className={styles.title_content}>
                        For Heather Henson, of Boreal Blooms in Cold Lake, Alberta, Canada, growing flowers that can be
                        dried and incorporated into late fall and winter floral arrangements has been a game-changer.
                        During her growing season, this farmer-florist relies on a vivid palette of annuals, perennials
                        and ornamental grasses to supply her studio.
                    </span>
                </div>
                <div className={styles.about_body}>
                    <div className={styles.body_img}>
                        <img src={Images.girl_florist} alt="video1" />
                    </div>
                    <div className={styles.body_content}>
                        <div className={styles.body_content_text}>
                            <span>SLOW FLOWERS’ FLORAL INSIGHTS</span>
                            <h4>Dried flowers are having a renaissance </h4>
                            <p>
                                This awareness has been stimulated by sustainable sourcing practices and the desire on
                                the part of North American flower growers to “extend the season” beyond the last frost.
                            </p>
                            <Link>contact us</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.services}>
                <div className={styles.services_header}>
                    <span>our services</span>
                    <h1>florist's services</h1>
                </div>
                <div className={styles.services_body}>
                    <div className={styles.col_4}>
                        <div className={styles.card}>
                            <div className={styles.card_img}>
                                <img src={Images.services_1} alt="card_img" />
                            </div>
                            <h2>custom orders</h2>
                            <span>Flower helps you perfectly express how important your significant.</span>
                        </div>
                    </div>
                    <div className={styles.col_4}>
                        <div className={styles.card}>
                            <div className={styles.card_img}>
                                <img src={Images.services_2} alt="card_img" />
                            </div>
                            <h2>event decoration</h2>
                            <span>Flower helps you perfectly express how important your significant.</span>
                        </div>
                    </div>
                    <div className={styles.col_4}>
                        <div className={styles.card}>
                            <div className={styles.card_img}>
                                <img src={Images.services_3} alt="card_img" />
                            </div>
                            <h2>green landscape</h2>
                            <span>Flower helps you perfectly express how important your significant.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
