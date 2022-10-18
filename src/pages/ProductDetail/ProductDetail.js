import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Images from '~/assets/images/';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import styles from './ProductDetail.module.scss';

function ProductDetail() {
    return (
        <div className={styles.productDetail}>
            <div className={styles.container}>
                <div className={styles.groupImg}>
                    <div className={styles.main_img}>
                        <img src={Images.ig3} alt="item1" />
                    </div>
                    <div className={styles.sub_img}>
                        <ul>
                            <li>
                                <img src={Images.item2} alt="item2" />
                            </li>
                            <li>
                                <img src={Images.item2} alt="item2" />
                            </li>
                            <li>
                                <img src={Images.item2} alt="item2" />
                            </li>
                            <li>
                                <img src={Images.item2} alt="item2" />
                            </li>
                            <li>
                                <img src={Images.item2} alt="item2" />
                            </li>
                            <li>
                                <img src={Images.item2} alt="item2" />
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={styles.groupInfo}>
                    <div className={styles.row}>
                        <div className={styles.main_info}>
                            <div className={styles.name_rate}>
                                <span>succulent</span>
                                <h4>fly me to the moon</h4>
                                <ul>
                                    <li>
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                    </li>
                                    <li>
                                        <span>03 reviews</span>
                                    </li>
                                </ul>
                            </div>
                            <div className={styles.price}>$34.00</div>
                        </div>
                        <div className={styles.sub_info}>
                            <ul>
                                <li>
                                    catigories: <span>succulent</span>
                                </li>
                                <li>
                                    product code: <span>pm 01</span>
                                    <li>
                                        availability: <span>in stock</span>
                                    </li>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;
