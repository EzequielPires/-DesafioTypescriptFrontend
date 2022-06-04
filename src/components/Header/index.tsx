import styles from "./styles.module.scss";

export function Header() {
    return (
        <header className={styles.header}>
            <span className={styles.logo}>Produtos</span>
        </header>
    );
}