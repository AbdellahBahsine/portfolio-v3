import styles from './about.module.css';

const About = () => {
    return (
        <section id="about" className={styles.about}>
            <div className={styles.about__inner}>
                <h2 className={styles.about__title}>About <span>Me</span></h2>
                <p className={styles.about__text}>My name is Abdellah, I'm a front end developer based in Morocco. I'm passionate about coding and problem solving. I'm always trying to improve my programming skills by learning new stuff and be up to date.
                <br /><br />I have experience working primarily with HTML, CSS, Sass, Boostrap, JavaScript and React JS, but I'm also learning new technologies and expanding my skillset to include the full-stack by learning MongoDB and NodeJS. My end goal is to become a fullstack and create fully functioning applications.
                <br /><br />Other than coding, I love reading about philosophy because it helps challenge my thoughts/beliefs, playing or watching video games and listening to music.</p>
                <a href="/AbdellahBahsine_Resume.pdf" target="_blank"><button className={`${styles.cta} ${styles.primary}`}>Download Resume</button></a>
            </div>
        </section>
    )
}

export default About;