import { useEffect, useRef } from 'react';

function ClickOutSide({ children, state }) {
    const htmlRef = useRef();

    useEffect(() => {
        const handleClickOutSide = (e) => {
            if (htmlRef.current && !htmlRef.current.contains(e.target)) {
                state = false;
            }
        };
        document.addEventListener('mousedown', handleClickOutSide);
        return () => {
            document.removeEventListener('mousedown', handleClickOutSide);
        };
    }, [htmlRef]);

    return <div ref={htmlRef}>{children}</div>;
}

export default ClickOutSide;
