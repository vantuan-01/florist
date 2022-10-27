import { faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';
import SelectSort from '~/components/SelectSort';
import Widget from '~/components/Widget';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import styles from './Products.module.scss';

function ListItem({ items }) {
    return (
        <>
            <div className={styles.sortable}>
                <SelectSort />
            </div>
            <ul className={styles.list_items}>
                {items &&
                    items.length !== 0 &&
                    items.map((item, index) => {
                        return (
                            <li className={styles.item} key={index}>
                                <img src={item.imageUrl} alt={item.imageUrl} />
                                <div className={styles.menu_link_widget}>
                                    <Widget icon={faMagnifyingGlass} id={item.id} />
                                    <Widget icon={faCartShopping} />
                                    <Widget icon={faHeart} />
                                </div>
                                <h6>
                                    <Link to={`/products/${item.id}`} className={styles.item_name}>
                                        {item.name}
                                    </Link>
                                </h6>
                                <p className={styles.item_price}>{`$ ${item.price}.00`}</p>
                            </li>
                        );
                    })}
            </ul>
        </>
    );
}

export default ListItem;
