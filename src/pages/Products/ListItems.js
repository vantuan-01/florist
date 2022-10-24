import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import Widget from '~/components/Widget';
import config from '~/config/routes';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import styles from './Products.module.scss';

function ListItem({ items }) {
    return (
        <ul className={styles.list_items}>
            {items &&
                items.length !== 0 &&
                items.map((item, index) => {
                    return (
                        <li className={styles.item} key={index}>
                            <img src={item.imageUrl} alt={item.imageUrl} />
                            <div className={styles.menu_link_widget}>
                                <Widget icon={faMagnifyingGlass} id={item.id} />
                            </div>
                            <h6>
                                <Link to={config.productDetail} className={styles.item_name}>
                                    {item.name}
                                </Link>
                            </h6>
                            <p className={styles.item_price}>{`$ ${item.price}.00`}</p>
                        </li>
                    );
                })}
        </ul>
    );
}

export default ListItem;
