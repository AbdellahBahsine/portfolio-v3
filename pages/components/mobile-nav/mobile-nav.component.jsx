import styles from './mobile-nav.module.css';

import Link from 'next/link'

const MobileNav = ({isOpen}) => {
    return (
        <nav className={isOpen ? `${styles.mobile__menu} ${styles.open}` : styles.mobile__menu}>
            <Link href="/"><a>Home</a></Link>
            <Link href="/#about"><a>About</a></Link>
            <Link href="/projects"><a>Projects</a></Link>
            <Link href="/#contact"><a>Contact</a></Link> 
        </nav>
    )
}

export default MobileNav;