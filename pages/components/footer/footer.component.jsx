import styles from './footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__inner}>
                <p className={styles.credit}>© 2021 ABDELLAH BAHSINE</p>
            </div>
        </footer>
    )
}

export default Footer;