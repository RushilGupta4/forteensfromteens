import React from 'react';
import styles from './Button.module.css';
import {Link} from "react-router-dom";

function Button({children, className, to, highlighted}) {
    return (
        <Link className={`${styles.button} ${highlighted ? styles.buttonPrimary : styles.buttonSecondary} ${className ? className : ''}`} to={to}>
            {children}
        </Link>
    );
}

export default Button;