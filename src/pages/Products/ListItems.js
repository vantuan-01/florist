import { faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import Loading from '~/components/Loading';
import Pagination from '~/components/Pagination';
import SelectSort from '~/components/SelectSort';
import Widget from '~/components/Widget';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { selectItems } from '~/reducers/Products';
import styles from './Products.module.scss';
import { useSelector } from 'react-redux';

function ListItem() {
    const items = useSelector(selectItems);
    return (
        <>
            {items && items.length !== 0 && (
                <div className={styles.sortable}>
                    <SelectSort items={items} />
                </div>
            )}
            <ul className={styles.list_items}>
                {items &&
                    items.length !== 0 &&
                    items.map((item, index) => {
                        return (
                            <li className={styles.item} key={index}>
                                <div className={styles.block_img}>
                                    <img src={item.imageUrl} alt={item.imageUrl} />
                                    <div className={styles.menu_link_widget}>
                                        <Widget icon={faMagnifyingGlass} id={item.id} />
                                        <Widget icon={faCartShopping} addOne={item} />
                                        <Widget icon={faHeart} love />
                                    </div>
                                </div>
                                <div className={styles.block_content}>
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
                                </div>
                            </li>
                        );
                    })}
            </ul>
            <Pagination />
        </>
    );
}

export default ListItem;
