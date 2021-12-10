import styles from './hero.module.css';
import Link from 'next/link'

import unDraw from '../../../public/images/unDraw.svg';

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.hero__inner}>
                <img className={styles.img} src={unDraw.src} alt="undraw" />
                <p className={styles.hero__subtitle}>&#128075; Hi! My name is Abdellah</p>
                <h1 className={styles.hero__title}>I'm a <span className={styles.emphasize}>front-end developer</span>, and I <span className={styles.next__line}>create clean and responsive websites.</span></h1>
                <Link href="#contact"><button className={`${styles.cta} ${styles.primary}`}>Get In Touch</button></Link>
            </div>
        </section>
    )
}

export default Hero;