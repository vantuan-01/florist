import Portal from '../Portal';
import styles from './Sidebar.module.scss';

function Sidebar() {
    return (
        <Portal>
            <div className={styles.wrapper}>
                <div className={styles.container}></div>
            </div>
        </Portal>
    );
}

export default Sidebar;
