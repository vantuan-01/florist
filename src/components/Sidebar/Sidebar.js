import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Images from '~/assets/images';
import { NavLink } from 'react-router-dom';
import Portal from '../Portal';
import clsx from 'clsx';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import navlink from '~/config/navlink';
import styles from './Sidebar.module.scss';

function Sidebar({}) {
    return (
        <Portal id="sidebar-id">
            {/* <div className={styles.modal}></div> */}
            <div className={clsx(styles.wrapper, { [styles.wrapper_slide]: false })}>
                <div className={styles.container}>
                    <div className={clsx(styles.header, { [styles.header_slide]: false })}>
                        <button className={styles.header_backbtn}>
                            <FontAwesomeIcon icon={faXmark} size="3x" />
                        </button>
                        <div className={styles.header_logo}>
                            <img src={Images.logo} alt="logo" />
                        </div>
                    </div>
                    <div className={styles.body}>
                        <ul className={clsx({ [styles.ul_slide]: true })}>
                            {navlink &&
                                navlink.map((item, index) => (
                                    <li key={index}>
                                        <NavLink
                                            end
                                            className={(nav) =>
                                                clsx(styles.navItem, {
                                                    [styles.active]: nav.isActive,
                                                })
                                            }
                                            to={item.config}
                                        >
                                            {item.name}
                                        </NavLink>
                                    </li>
                                ))}
                        </ul>
                    </div>
                </div>
            </div>
        </Portal>
    );
}

export default Sidebar;
