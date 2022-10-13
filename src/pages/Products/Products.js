import Images from '~/assets/images';
import { Link } from 'react-router-dom';
import config from '~/config/routes';
import styles from './Products.module.scss';

function Products() {
    return (
        <div className={styles.products}>
            <div className={styles.container}>
                <div className={styles.sortable}>
                    <input type="text" />
                </div>
                <div className={styles.all_items}>
                    <ul className={styles.list_items}>
                        <li className={styles.item}>
                            <img src={Images.item1} alt="item1" />
                            <h6>
                                <Link to={config.productDetail} className={styles.item_name}>
                                    Fly Me To The Moon
                                </Link>
                            </h6>
                            <p className={styles.item_price}>$27.50</p>
                        </li>
                        <li className={styles.item}>
                            <img src={Images.item2} alt="item2" />
                            <h6>
                                <Link to={config.productDetail} className={styles.item_name}>
                                    Fly Me To The Moon
                                </Link>
                            </h6>
                            <p className={styles.item_price}>$27.50</p>
                        </li>{' '}
                        <li className={styles.item}>
                            <img src={Images.item3} alt="item3" />
                            <h6>
                                <Link to={config.productDetail} className={styles.item_name}>
                                    Fly Me To The Moon
                                </Link>
                            </h6>
                            <p className={styles.item_price}>$27.50</p>
                        </li>
                        <li className={styles.item}>
                            <img src={Images.item4} alt="item4" />
                            <h6>
                                <Link to={config.productDetail} className={styles.item_name}>
                                    Fly Me To The Moon
                                </Link>
                            </h6>
                            <p className={styles.item_price}>$27.50</p>
                        </li>{' '}
                        <li className={styles.item}>
                            <img src={Images.item5} alt="item5" />
                            <h6>
                                <Link to={config.productDetail} className={styles.item_name}>
                                    Fly Me To The Moon
                                </Link>
                            </h6>
                            <p className={styles.item_price}>$27.50</p>
                        </li>
                        <li className={styles.item}>
                            <img src={Images.item6} alt="item6" />
                            <h6>
                                <Link to={config.productDetail} className={styles.item_name}>
                                    Fly Me To The Moon
                                </Link>
                            </h6>
                            <p className={styles.item_price}>$27.50</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Products;
