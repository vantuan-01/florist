import { faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { lazy } from 'react';
import styles from './Products.module.scss';

const SelectSort = lazy(() => import('~/components/SelectSort'));
const Widget = lazy(() => import('~/components/Widget'));

function ListItem({ items }) {
    const sortPrice = (childData) => {
        const opt = childData;
        return opt;
    };
    return (
        <>
            <div className={styles.sortable}>
                <SelectSort child={sortPrice} />
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
                                    <Widget icon={faCartShopping} addOne />
                                    <Widget icon={faHeart} id={item.id} />
                                </div>
                                <h6>
                                    <Link to={`/products/${item.id}`} className={styles.item_name}>
                                        {item.name}
                                    </Link>
                                </h6>
                                <p>
                                    <Link
                                        to={`/products/${item.id}`}
                                        className={styles.item_price}
                                    >{`$ ${item.price}.00`}</Link>
                                </p>
                            </li>
                        );
                    })}
            </ul>
        </>
    );
}

export default ListItem;
