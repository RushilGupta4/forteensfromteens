import React from 'react';
import styles from './Navbar.module.css';
import Button from "../common/Button";

function Navbar({data}) {
    return (
        <div className={styles.container}>
            <ul className={styles.listContainer}>
                {
                    data.map(x =>
                        <li key={x.route}>
                            <Button to={x.route} highlighted={x.highlighted}>
                                {x.text}
                            </Button>
                        </li>)
                }
            </ul>
        </div>
    );
}

export default Navbar;