import ReactDOM from 'react-dom';

function Portal({ children, id }) {
    return ReactDOM.createPortal(<div id={id}>{children}</div>, document.querySelector('body'));
}

export default Portal;
