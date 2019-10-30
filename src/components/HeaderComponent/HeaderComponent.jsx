import React from 'react';
import styles from './HeaderComponent.module.css';
import {NavLink} from "react-router-dom";

const HeaderComponent = (props) => {
    return <header className={styles.header}>
        <img src='data:image/png;base64,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' />

        <div className={styles.loginBlock}>
            { props.isAuth ? props.login
                : <NavLink to={'/login'}>Login</NavLink> }
        </div>
    </header>
}

export default HeaderComponent;