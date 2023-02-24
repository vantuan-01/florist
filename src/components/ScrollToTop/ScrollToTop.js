import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop({ children }) {
    const location = useLocation();
    useEffect(() => {
        // when change route
        window.scrollTo(0, 0);
        // when refresh page
        window.onbeforeunload = () => {
            window.scrollTo(0, 0);
        };
    }, [location]);

    return <>{children}</>;
}

export default ScrollToTop;
