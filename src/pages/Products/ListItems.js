import { faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import SelectSort from '~/components/SelectSort';
import Widget from '~/components/Widget';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { selectSorted } from '~/reducers/Products';
import styles from './Products.module.scss';
import { useSelector } from 'react-redux';

function ListItem({ items }) {
    const listItemSorted = useSelector(selectSorted);
    // let productList = items;
    // if (listItemSorted) {
    //     productList = listItemSorted;
    // } else if (!listItemSorted) {
    //     productList = items;
    // }
    const [productList, setProductList] = useState(items);
    useEffect(() => {
        if (listItemSorted) {
            setProductList(listItemSorted);
        }
    });
    return (
        <>
            <div className={styles.sortable}>
                <SelectSort items={items} />
            </div>
            <ul className={styles.list_items}>
                {productList &&
                    productList.length !== 0 &&
                    productList.map((item, index) => {
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
