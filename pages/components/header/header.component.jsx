import styles from './header.module.css';
import { useRouter } from 'next/router'

import Link from 'next/link'

const Header = ({handleClick, isOpen}) => {

    const { asPath } = useRouter();

    return (
        <header className={asPath === "/projects" ? `${styles.headerColor} ${styles.header}`: styles.header}>
            <div className={styles.header__inner}>
                <Link href="/"><a className={styles.logo}>Abdellah B.</a></Link>
                <div onClick={() => handleClick()} className={isOpen ? `${styles.burger__menu} ${styles.close}` : styles.burger__menu}>
                    <span></span>
                    <span></span> 
                    <span></span>
                </div>
                <nav className={styles.nav}>
                    <Link href="/"><a>Home</a></Link>
                    <Link href="/#about"><a>About</a></Link>
                    <Link href="/projects"><a>Projects</a></Link>
                    <Link href="/#contact"><a>Contact</a></Link> 
                </nav>
            </div>
        </header>
    )
}

export default Header;