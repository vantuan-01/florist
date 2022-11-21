import * as httpRequest from '~/utils/httpRequest';

import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';

import ListItems from './ListItems';
import ProductDetail from '~/pages/ProductDetail';
import axios from 'axios';
import styles from './Products.module.scss';

function Products() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        handleItems();
    }, []);

    const handleItems = async () => {
        // httpRequest.get('/product/products').then((res) => {
        //     console.log('🚀 ~ file: Products.js ~ line 15 ~ httpRequest.get ~ res', res);
        //     items = res.data;
        //     setItems(res.data);
        // });
        // const res = await axios.get('https://florist-pls.herokuapp.com/api/product/products');
        // // console.log(res.data);
        // // items = res.data;
        // setItems(res.data);
        // console.log('item', items);
        const res = await httpRequest.get('/product/products');
        // console.log(res.data);
        // items = res.data;
        setItems(res.data);
        console.log('item', items);
    };

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
