import * as httpRequest from '~/utils/httpRequest';

import { faCircleXmark, faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Images from '~/assets/images';
import Portal from '~/components/Portal';
import clsx from 'clsx';
import { forwardRef } from 'react';
import styles from './SearchResult.module.scss';
import { useRef } from 'react';

function SearchResult({ openPanel, handleClose }, ref) {
    const inputRef = useRef();
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    useEffect(() => {
        if (openPanel) {
            inputRef.current.focus();
        }
    }, [openPanel]);

    useEffect(() => {
        const value = searchValue.trim();
        if (value) {
            const handler = setTimeout(() => {
                httpRequest.get('/product/products').then((res) => {
                    setSearchResult(res.data);
                });
            }, 3000);

            return () => {
                clearTimeout(handler);
            };
        }
    }, [searchValue]);

    const handleClear = () => {
        inputRef.current.focus();
        setSearchValue('');
        setSearchResult([]);
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
                        <button className={styles.searchResult_delbtn} onClick={() => handleClose(!openPanel)}>
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
                                {searchValue.trim() !== 0 && searchResult.length !== 0 && (
                                    <ul>
                                        <li className={styles.searchResult_item}>
                                            <img src={Images.catus} alt="searchResult_item" />
                                            <div className={styles.searchResult_item_content}>
                                                <p>category</p>
                                                <span>Green Hydrangeas Flower</span>
                                            </div>
                                        </li>
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
