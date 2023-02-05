import { Link } from 'react-router-dom';
import config from '~/config/routes';
import { selectLogged } from '~/reducers/Login';
import styles from './Empty.module.scss';
import { useSelector } from 'react-redux';

function Empty() {
    const isLogged = useSelector(selectLogged);
    return (
        <>
            {isLogged && isLogged.length !== 0 ? (
                <div className={styles.empty}>
                    <span>Your cart is empty</span>
                    <Link className={styles.back_btn} to={config.product}>
                        Back to shopping
                    </Link>
                </div>
            ) : (
                <div className={styles.empty}>
                    <span>Your cart is empty</span>
                    <Link className={styles.back_btn} to={config.signIn}>
                        Log in to your account
                    </Link>
                </div>
            )}
        </>
    );
}

export default Empty;
