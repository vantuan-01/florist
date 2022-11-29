import * as httpRequest from '~/utils/httpRequest';

import { faCircleXmark, faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import Portal from '~/components/Portal';
import clsx from 'clsx';
import config from '~/config/routes';
import { forwardRef } from 'react';
import styles from './SearchResult.module.scss';
import { useRef } from 'react';

function SearchResult({ openPanel, handleClose }, ref) {
    const inputRef = useRef();
    const [searchValue, setSearchValue] = useState('');
    const [listProduct, setListProduct] = useState([]);
    var [filterResult, setFilterResult] = useState([]);
    useEffect(() => {
        if (openPanel) {
            inputRef.current.focus();
        }
    }, [openPanel]);

    useEffect(() => {
        httpRequest.get('/product/products').then((res) => {
            setListProduct(res.data);
        });
    });

    useEffect(() => {
        const handler = setTimeout(() => {
            searchLogic();
        }, 3000);
        return () => {
            clearTimeout(handler);
        };
    }, [searchValue]);

    const searchLogic = () => {
        const value = searchValue.trim();
        if (value) {
            const filterItem = listProduct.filter((item) => {
                return item.name.includes(value) || item.category.includes(value);
            });
            filterResult = filterItem;
            setFilterResult(filterResult);
            console.log(filterResult);
        }
    };

    const handleClear = () => {
        inputRef.current.focus();
        setSearchValue('');
        setListProduct([]);
        setFilterResult([]);
    };
    const handleChange = (e) => {
        const value = e.target.value;
        if (!value.startsWith(' ')) {
            setSearchValue(value);
        }
    };

    return (
        <Portal>
            <div ref={ref} className={clsx(styles.searchResult, { [styles.searchResult_slide]: !openPanel })}>
                <div className={styles.wrapper}>
                    <div className={styles.searchResult_inner}>
                        <button
                            className={styles.searchResult_delbtn}
                            onClick={() => {
                                handleClose(!openPanel);
                                handleClear();
                            }}
                        >
                            <FontAwesomeIcon icon={faXmark} size="2x" />
                        </button>
                        <h1>Search</h1>
                        <div className={styles.searchResult_container}>
                            <div className={styles.searchResult_input}>
                                <input
                                    ref={inputRef}
                                    value={searchValue}
                                    onChange={handleChange}
                                    type="text"
                                    placeholder="Name..."
                                />
                                {searchValue && (
                                    <button className={styles.clear_btn} onClick={handleClear}>
                                        <FontAwesomeIcon icon={faCircleXmark} />
                                    </button>
                                )}
                                <button className={styles.searchResult_searchIcon}>
                                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                                </button>
                            </div>
                            <div className={styles.searchResult_results}>
                                {listProduct.length !== 0 && filterResult.length !== 0 && (
                                    <ul>
                                        {filterResult &&
                                            filterResult.map((item, index) => (
                                                <li key={index} className={styles.searchResult_item}>
                                                    <Link
                                                        to={`${config.product}/${item.id}`}
                                                        onClick={() => (document.body.style.overflow = '')}
                                                    >
                                                        <img src={item.imageUrl} alt="searchResult_item" />
                                                        <div className={styles.searchResult_item_content}>
                                                            <p>{item.category}</p>
                                                            <span>{item.name}</span>
                                                        </div>
                                                    </Link>
                                                </li>
                                            ))}
                                    </ul>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Portal>
    );
}

export default forwardRef(SearchResult);
