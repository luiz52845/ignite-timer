import styles from './Sidebar.module.css';
import { PencilLine } from 'phosphor-react'

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img
                className={styles.cover}
                src="https://images.unsplash.com/photo-1580983561371-7f4b242d8ec0?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

            <div className={styles.profile}>

                <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/57885079?v=4&size=64" />

                <strong>Luiz Fernandes</strong>
                <span>Web Developer</span>

            </div>

            <footer>

                <a href="#"> <PencilLine  size={20}/>Editar seu perfil</a>
            </footer>

        </aside>
    );

}