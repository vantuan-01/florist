import { selectIsRegist, selectIsValid, setEmail, setIsRegist, setPassword } from '~/reducers/Auth';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';

import AuthBtn from '~/components/AuthBtn';
import Images from '~/assets/images';
import { selectLogged } from '~/reducers/Login';
import styles from './SignIn.module.scss';
import { useNavigate } from 'react-router-dom';

function SignIn() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isValid = useSelector(selectIsValid);
    const isRegist = useSelector(selectIsRegist);
    const inputRef = useRef();
    const isLogged = useSelector(selectLogged);
    useEffect(() => {
        inputRef.current.focus();
    }, [isRegist]);

    useEffect(() => {
        const loggedInUser = localStorage.getItem('userUID');
        if (loggedInUser && isLogged.length !== 0) {
            navigate('/');
        } else if (!loggedInUser) {
            navigate('/SignIn');
        }
    }, [navigate]);

    const handleChangeForm = () => {
        dispatch(setIsRegist(!isRegist));
        dispatch(setEmail(''));
        dispatch(setPassword(''));
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
                            onChange={(e) => dispatch(setEmail(e.target.value))}
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
