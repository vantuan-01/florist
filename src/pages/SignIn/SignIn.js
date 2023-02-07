import {
    selectEmail,
    selectIsRegist,
    selectIsValid,
    selectPassword,
    setEmail,
    setIsRegist,
    setIsValid,
    setPassword,
} from '~/reducers/Auth';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';

import AuthBtn from '~/components/AuthBtn';
import Images from '~/assets/images';
import styles from './SignIn.module.scss';

function SignIn() {
    const dispatch = useDispatch();
    const isValid = useSelector(selectIsValid);
    const isRegist = useSelector(selectIsRegist);
    const inputRef = useRef();
    const mail = useSelector(selectEmail);
    const pass = useSelector(selectPassword);
    useEffect(() => {
        inputRef.current.focus();
    }, [isRegist]);

    useEffect(() => {
        dispatch(setIsValid(''));
    }, [mail, pass]);

    const handleChangeForm = () => {
        dispatch(setIsRegist(!isRegist));
        dispatch(setEmail(''));
        dispatch(setPassword(''));
    };

    const handleChangeEmail = (e) => {
        const email = e.target.value.replace(/\s/g, '');
        dispatch(setEmail(email));
    };

    const handleKeyDown = (e) => {
        if (e.key === ' ') {
            e.preventDefault();
        }
    };

    return (
        <div className={styles.wrapper}>
            <img className={styles.login_bg} src={Images.tableTree} alt="loginbg" />
            <div className={styles.login_wrapper}>
                <div className={styles.login}>
                    <div className={styles.header}>
                        <h1>Welcome to </h1>
                        <img className={styles.login_logo} src={Images.logo} alt="logo" />
                    </div>
                    <div className={styles.body}>
                        {isValid && <span className={styles.invalid_text}>{isValid}</span>}
                        <input
                            ref={inputRef}
                            className={styles.login_input}
                            type="text"
                            placeholder="Email"
                            onKeyDown={handleKeyDown}
                            onChange={handleChangeEmail}
                        />
                        <input
                            className={styles.login_input}
                            type="password"
                            placeholder="password"
                            onChange={(e) => dispatch(setPassword(e.target.value))}
                        />
                        {!isRegist ? <AuthBtn signin /> : <AuthBtn register />}
                    </div>
                    <div className={styles.footer}>
                        <button className={styles.fogot_btn} onClick={handleChangeForm}>
                            {isRegist ? 'have an account?' : "don't have account?"}
                        </button>
                        <button className={styles.fogot_btn} onClick={() => alert('kememay')}>
                            forgot your account?
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignIn;
