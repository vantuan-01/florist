import { faShoppingBag, faStar } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Images from '~/assets/images/';
import QtyButton from '~/components/QtyButton';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import styles from './ProductDetail.module.scss';
import { useParams } from 'react-router-dom';

function ProductDetail({ items }) {
    const { id } = useParams();
    console.log(items);
    return (
        <div className={styles.productDetail}>
            {
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
                        <div className={styles.groupInfo_row}>
                            <div className={styles.main_info}>
                                <div className={styles.name_rate}>
                                    <span className={styles.category}>succulent</span>
                                    <h4 className={styles.name}>fly me to the moon</h4>
                                    <ul className={styles.reviews}>
                                        <li>
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                        </li>
                                        <li>03 reviews</li>
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
                                    </li>
                                    <li>
                                        availability: <span>in stock</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={styles.groupInfo_row}>
                            <div className={styles.btn_group}>
                                <div className={styles.btn_amount}>
                                    <QtyButton />
                                </div>
                                <button className={styles.btn_add}>
                                    <div className={styles.cart_icon}>
                                        <FontAwesomeIcon icon={faShoppingBag} />
                                    </div>
                                    <span>add to cart</span>
                                </button>
                                <button className={styles.btn_love}>
                                    <FontAwesomeIcon icon={faHeart} />
                                </button>
                            </div>
                        </div>
                        <div className={styles.groupInfo_row}>
                            <div className={styles.description}>
                                <ul>
                                    <li>
                                        <button>Description</button>
                                    </li>
                                    <li>
                                        <button>Shipping & Returns</button>
                                    </li>
                                    <li>
                                        <button>Reviews </button>
                                    </li>
                                </ul>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                                    gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}

export default ProductDetail;
