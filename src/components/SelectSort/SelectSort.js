import React, { useEffect, useState } from 'react';
import { selectSortOption, sortName, sortPrice } from '~/reducers/Products';
import { useDispatch, useSelector } from 'react-redux';

import clsx from 'clsx';
import { setFilter } from '~/reducers/Pagination';
import styles from './SelectSort.module.scss';
import { useRef } from 'react';

function SelectSort({ items }) {
    const [openOption, setOpenOption] = useState(false);
    const ref = useRef();
    const dispatch = useDispatch();
    const sortOpt = useSelector(selectSortOption);

    useEffect(() => {
        if (openOption) {
            setOpenOption(true);
        } else if (!openOption) {
            setOpenOption(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const handleOpen = () => {
        setOpenOption(!openOption);
    };

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (ref.current && !ref.current.contains(e.target)) {
                setOpenOption(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ref]);

    return (
        <div className={styles.select_sort} ref={ref}>
            <div className={styles.custom_sort} onClick={handleOpen}>
                <span>{!sortOpt ? 'Sort by popularity' : sortOpt}</span>
                <ul className={clsx(styles.custom_select, { [styles.custom_select_slide]: openOption })}>
                    <li
                        onClick={() => {
                            dispatch(sortPrice({ optionNum: 1, items }));
                            dispatch(setFilter({ _page: 1 }));
                        }}
                        className={styles.custom_option}
                    >
                        low to height
                    </li>
                    <li
                        onClick={() => {
                            dispatch(sortPrice({ optionNum: 2, items }));
                            dispatch(setFilter({ _page: 1 }));
                        }}
                        className={styles.custom_option}
                    >
                        height to low
                    </li>
                    <li
                        onClick={() => {
                            dispatch(sortName({ optionNum: 1, items }));
                            dispatch(setFilter({ _page: 1 }));
                        }}
                        className={styles.custom_option}
                    >
                        a - z
                    </li>
                    <li
                        onClick={() => {
                            dispatch(sortName({ optionNum: 2, items }));
                            dispatch(setFilter({ _page: 1 }));
                        }}
                        className={styles.custom_option}
                    >
                        z - a
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default SelectSort;
