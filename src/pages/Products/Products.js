import * as httpRequest from '~/utils/httpRequest';

import { Route, Routes } from 'react-router-dom';
import { lazy, useEffect, useState } from 'react';

import styles from './Products.module.scss';

const ListItems = lazy(() => import('./ListItems'));
const ProductDetail = lazy(() => import('~/pages/ProductDetail'));

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
