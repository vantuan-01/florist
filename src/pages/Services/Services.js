import Images from '~/assets/images';
import styles from './Services.module.scss';

function Services() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.col_4}>
                <div className={styles.service_cards}>
                    <div className={styles.card}>
                        <div className={styles.card_img}>
                            <img src={Images.services_1} alt="cart-img" />
                        </div>
                        <h2>custom orders</h2>
                        <span>Flower helps you perfectly express how important your significant.</span>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.card_img}>
                            <img src={Images.services_2} alt="cart-img" />
                        </div>
                        <h2>event decoration</h2>
                        <span>Flower helps you perfectly express how important your significant.</span>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.card_img}>
                            <img src={Images.services_3} alt="cart-img" />
                        </div>
                        <h2>green landscape</h2>
                        <span>Flower helps you perfectly express how important your significant.</span>
                    </div>
                </div>
            </div>
            <div className={styles.col_8}>
                <div className={styles.service_contents}>
                    <div className={styles.video}>
                        <img src={Images.services_video} alt="services_video" />
                        <h2>custom orders</h2>
                    </div>
                    <div className={styles.text}>
                        <p className={styles.price}>From $60 - $300</p>
                        <p className={styles.foreword}>
                            For Heather Henson, of Boreal Blooms in Cold Lake, Alberta, Canada, growing flowers that can
                            be dried and incorporated into late fall and winter floral arrangements has been a
                            game-changer. During her growing season, this farmer-florist relies on a vivid palette of
                            annuals, perennials and ornamental grasses to supply her studio.
                        </p>
                        <div className={styles.sub_content}>
                            <div className={styles.sub_content_inner}>
                                <div className={styles.sub_content_icon}>
                                    <img src={Images.mark_icon} alt="icon" />
                                </div>
                                <div className={styles.sub_content_text}>
                                    <p>
                                        Free initial consulting. For retail and office tenants who are interested in a
                                        weekly delivery program floral design plan.
                                    </p>
                                </div>
                            </div>
                            <div className={styles.sub_content_inner}>
                                <div className={styles.sub_content_icon}>
                                    <img src={Images.mark_icon} alt="icon" />
                                </div>
                                <div className={styles.sub_content_text}>
                                    <p>
                                        Birthday Blooms. Red White & Bloom will offer a free arrangement to each office
                                        manager for a commercial account on his or her birthday.
                                    </p>
                                </div>
                            </div>
                            <div className={styles.sub_content_inner}>
                                <div className={styles.sub_content_icon}>
                                    <img src={Images.mark_icon} alt="icon" />
                                </div>
                                <div className={styles.sub_content_text}>
                                    <p>
                                        Priority delivery program. Red White & Bloom will work with each commercial
                                        customer to determine a weekly delivery schedule.
                                    </p>
                                </div>
                            </div>
                            <div className={styles.sub_content_inner}>
                                <div className={styles.sub_content_icon}>
                                    <img src={Images.mark_icon} alt="icon" />
                                </div>
                                <div className={styles.sub_content_text}>
                                    <p>
                                        Referral Program. Red White & Bloom will offer a one-time 25% discount to each
                                        commercial customer for every additional.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;
