import React, { useEffect, useState } from 'react';

import styles from './SelectSort.module.scss';

function SelectSort() {
    const options = ['low to height', 'height to low', 'a - z', 'z - a'];
    const [openOption, setOpenOption] = useState(false);
    const [presentOpt, setPresentOpt] = useState('Sort by popularity');

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
    return (
        <div className={styles.select_sort}>
            <div className={styles.custom_sort} onClick={handleOpen}>
                <span>{presentOpt}</span>
                {openOption && (
                    <ul className={styles.custom_select}>
                        {options.map((option, index) => (
                            <li onClick={() => setPresentOpt(option)} key={index} className={styles.custom_option}>
                                {option}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default SelectSort;
