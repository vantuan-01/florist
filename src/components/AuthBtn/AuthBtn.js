import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { logOutStatus, loginStatus } from '~/reducers/Login';
import { selectEmail, selectIsRegist, selectPassword, setIsRegist, setIsValid } from '~/reducers/Auth';
import { setOrderList, setTotalPrice, setTotalQty } from '~/reducers/Cart';
import { useDispatch, useSelector } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import styles from './AuthBtn.module.scss';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function AuthBtn({ signin, signout, register }) {
    const auth = getAuth();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const email = useSelector(selectEmail);
    const password = useSelector(selectPassword);
    const isRegist = useSelector(selectIsRegist);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (isRegist) {
                if (e.isComposing || e.key === 'Enter') {
                    Register();
                }
            } else if (!isRegist) {
                if (e.isComposing || e.key === 'Enter') {
                    SignIn();
                }
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    });

    const Register = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Register
                dispatch(setIsValid(''));
                dispatch(setIsRegist(false));
                alert('Resgist successful');
                // console.log('Create account successful');
            })
            .catch((error) => {
                const errorCode = error.code;
                dispatch(setIsValid(error.code));
                // console.log(`register error: ${errorCode}`);
            });
    };

    const SignIn = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((currentUser) => {
                const useruid = auth.currentUser ? auth.currentUser.uid : null;
                const useremail = auth.currentUser ? auth.currentUser.email : null;
                dispatch(setIsValid(''));
                navigate('/');
                dispatch(loginStatus({ useruid, useremail }));
            })
            .catch((error) => {
                const errorCode = error.code;
                dispatch(setIsValid(error.code));

                // console.log(`login error: ${errorCode}`);
            });
    };

    const SignOut = () => {
        signOut(auth)
            .then(() => {
                dispatch(logOutStatus(''));
                dispatch(setOrderList([]));
                dispatch(setTotalPrice(0));
                dispatch(setTotalQty(0));
            })
            .catch((error) => {
                console.log('logout not worked');
            });
    };
    return (
        <>
            {signin ? (
                <button onClick={SignIn} className={styles.login_btn} type="submit">
                    log in
                </button>
            ) : signout ? (
                <button className={styles.logoutnBtn_auth} onClick={SignOut}>
                    <FontAwesomeIcon icon={faRightFromBracket} />
                    LogOut
                </button>
            ) : register ? (
                <button onClick={Register} className={styles.login_btn} type="submit">
                    register
                </button>
            ) : null}
        </>
    );
}

export default AuthBtn;
