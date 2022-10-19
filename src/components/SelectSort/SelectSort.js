import React, { useEffect, useRef, useState } from 'react';

import styles from './SelectSort.module.scss';

function SelectSort() {
    const options = ['low to height', 'height to low', ' a- z', 'z - a'];
    const [openOption, setOpenOption] = useState(false);
    const refs = useRef();

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
    console.log(refs.current);
    return (
        <div className={styles.select_sort}>
            <div className={styles.custom_sort} onClick={handleOpen}>
                <span>Sort by popularity</span>
                {openOption && (
                    <ul ref={refs} className={styles.custom_select}>
                        {options.map((option, index) => (
                            <li key={index} className={styles.custom_option}>
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
