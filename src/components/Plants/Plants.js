import styles from './Plants.module.scss';

function Plants() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.plant}>
                <div className={styles.plant__leaves}></div>
            </div>
        </div>
    );
}

export default Plants;
