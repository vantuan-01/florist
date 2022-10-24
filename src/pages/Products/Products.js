import * as httpRequest from '~/utils/httpRequest';

import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { faClipboard, faHeart } from '@fortawesome/free-regular-svg-icons';
import { useEffect, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Images from '~/assets/images';
import { Link } from 'react-router-dom';
import ListItems from './ListItems';
import ProductDetail from '../ProductDetail';
import SelectSort from '~/components/SelectSort';
import Widget from '~/components/Widget';
import config from '~/config/routes';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import routes from '~/config/routes';
import styles from './Products.module.scss';

function Products() {
    const [items, setItems] = useState();

    useEffect(() => {
        httpRequest.get('/product/products').then((res) => {
            setItems(res.data);
        });
    }, []);

    return (
        <div className={styles.products}>
            <div className={styles.container}>
                <div className={styles.sortable}>
                    <SelectSort />
                </div>
                <div className={styles.all_items}>
                    <Routes>
                        <Route path=":id" element={<ProductDetail items={items} />} />
                        <Route path="/" element={<ListItems items={items} />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default Products;
