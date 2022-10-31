import React, { useEffect, useState } from 'react';

import styles from './SelectSort.module.scss';

function SelectSort({ child }) {
    const options = ['low to height', 'height to low', 'a - z', 'z - a'];
    const [openOption, setOpenOption] = useState(false);

    useEffect(() => {
        if (openOption) {
            setOpenOption(true);
        } else if (!openOption) {
            setOpenOption(false);
        }
    }, [openOption]);
    const handleOpen = () => {
        setOpenOption(!openOption);
    };

    const sendOptions = (opt) => {
        child(opt);
    };

    return (
        <div className={styles.select_sort}>
            <div className={styles.custom_sort} onClick={handleOpen}>
                <span>Sort by popularity</span>
                {openOption && (
                    <ul className={styles.custom_select}>
                        {options.map((option, index) => (
                            <li onClick={() => sendOptions(option)} key={index} className={styles.custom_option}>
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
