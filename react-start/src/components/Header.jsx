

import styles from './Header.module.css';
import logo from '../assets/logo.svg';

export function Header() {
    return (
        <header>
            <strong className={styles.header}>
                <img src={logo} alt="Logotipo do Ignite" />
            </strong>
        </header>
    )
}
