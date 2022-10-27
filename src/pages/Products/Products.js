import * as httpRequest from '~/utils/httpRequest';

import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';

import ListItems from './ListItems';
import ProductDetail from '../ProductDetail';
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
                <div className={styles.all_items}>
                    <Routes>
                        <Route path=":id" element={<ProductDetail />} />
                        <Route path="/" element={<ListItems items={items} />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default Products;
