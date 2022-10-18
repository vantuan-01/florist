import { faClipboard, faHeart } from '@fortawesome/free-regular-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Images from '~/assets/images';
import { Link } from 'react-router-dom';
import SelectSort from '~/components/SelectSort';
import config from '~/config/routes';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import routes from '~/config/routes';
import styles from './Products.module.scss';

function Products() {
    return (
        <div className={styles.products}>
            <div className={styles.container}>
                <div className={styles.sortable}>
                    <SelectSort />
                </div>
                <div className={styles.all_items}>
                    <ul className={styles.list_items}>
                        <li className={styles.item}>
                            <img src={Images.item1} alt="item1" />
                            <div className={styles.menu_link_widget}>
                                <Link to={routes.productDetail} className={styles.widget}>
                                    <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
                                </Link>
                                <Link className={styles.widget}>
                                    <FontAwesomeIcon icon={faClipboard} size="lg" />
                                </Link>
                                <Link className={styles.widget}>
                                    <FontAwesomeIcon icon={faHeart} size="lg" />
                                </Link>
                            </div>
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
