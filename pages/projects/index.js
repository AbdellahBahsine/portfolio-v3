import styles from './projects.module.css';

import SharkStore from '../../public/images/shark-store.png';
import DogsFinder from '../../public/images/Dogs-finder.png';
import PersonalPortfolio from '../../public/images/personal-portfolio.png';
import MyTasks from '../../public/images/myTasks.png';
import Quotes from '../../public/images/quotes.png';
import Montreal from '../../public/images/montreal.png';
import DOOM from '../../public/images/doom.png';
import Reen from '../../public/images/reen.png';
import AgencyTemplate from '../../public/images/agency-template.png';
import LoopStudios from '../../public/images/loopstudios.png';

import Layout from '../components/layout/layout.component';

const Projects = () => {
    return (
        <Layout>
            <section className={styles.projects}>
                <div className={styles.projects__inner}>
                    <div className={styles.projects__cards}>
                        <div className={styles.projects__card}>
                            <div className={styles.card__image}>
                                <img className={styles.img} src={SharkStore.src} alt="shark-store" />
                            </div>
                            <div className={styles.card__content}>
                                <h3 className={styles.card__title}>Shark Store</h3>
                                <p className={styles.card__text}>E-commerce application built with React & Firebase. Card items are stored in the browser's LocalStorage and payements are done through Stripe.</p>
                                <div className={styles.card__buttons}>
                                    <a className={styles.card__button} href="https://shark-store.netlify.app/" target="_blank"><i className={`${styles.icon} fas fa-desktop`}></i> View Website</a>
                                    <a className={styles.card__button} href="https://github.com/AbdellahBahsine/shark-store" target="_blank"><i className={`${styles.icon} fas fa-code`}></i> View Code</a>
                                </div>
                            </div>
                        </div>

                        <div className={styles.projects__card}>
                            <div className={styles.card__image}>
                                <img className={styles.img} src={DogsFinder.src} alt="dogs-finder" />
                            </div>
                            <div className={styles.card__content}>
                                <h3 className={styles.card__title}>Dogs Finder</h3>
                                <p className={styles.card__text}>Dogs finder is an app that is used to look for dogs using their names with the help of an API. <br/><br/></p>
                                <div className={styles.card__buttons}> 
                                    <a className={styles.card__button} href="https://dogs-finder.netlify.app/" target="_blank"><i className={`${styles.icon} fas fa-desktop`}></i> View Website</a>
                                    <a className={styles.card__button} href="https://github.com/AbdellahBahsine/dogs-finder" target="_blank"><i className={`${styles.icon} fas fa-code`}></i> View Code</a>
                                </div>
                            </div> 
                        </div>

                        <div className={styles.projects__card}>
                            <div className={styles.card__image}>
                                <img className={styles.img} src={PersonalPortfolio.src} alt="portfolio" />
                            </div>
                            <div className={styles.card__content}>
                                <h3 className={styles.card__title}>Personal Portfolio</h3>
                                <p className={styles.card__text}>I have designed and coded my own portfolio from scratch using NextJS and NodeMailer. The website is responsive and friendly.</p>
                                <div className={styles.card__buttons}>
                                    <a className={styles.card__button} target="_blank" href="https://abdellah-bahsine.herokuapp.com/"><i className={`${styles.icon} fas fa-desktop`}></i> View Website</a>
                                    <a className={styles.card__button} target="_blank" href="https://github.com/AbdellahBahsine/portfolio-v3"><i className={`${styles.icon} fas fa-code`}></i> View Code</a>
                                </div>
                            </div>
                        </div>

                        <div className={styles.projects__card}>
                            <div className={styles.card__image}>
                                <img className={styles.img} src={MyTasks.src} alt="mytasks" />
                            </div>
                            <div className={styles.card__content}>
                                <h3 className={styles.card__title}>myTasks</h3>
                                <p className={styles.card__text}>This is my first mern stack application. It's a task management app that people can use to create and store their tasks.</p>
                                <div className={styles.card__buttons}>
                                    <a className={styles.card__button} href="https://my-tasks-application.herokuapp.com/" target="_blank"><i className={`${styles.icon} fas fa-desktop`}></i> View Website</a>
                                    <a className={styles.card__button} href="https://github.com/AbdellahBahsine/myTasks" target="_blank"><i className={`${styles.icon} fas fa-code`}></i> View Code</a>
                                </div>
                            </div>
                        </div>

                        <div className={styles.projects__card}>
                            <div className={styles.card__image}>
                                <img className={styles.img} src={Quotes.src} alt="quotes" />
                            </div>
                            <div className={styles.card__content}>
                                <h3 className={styles.card__title}>Quotes</h3>
                                <p className={styles.card__text}>PSD to code website...</p>
                                <div className={styles.card__buttons}>
                                    <a className={styles.card__button} href="https://quotes-template.netlify.app/" target="_blank"><i className={`${styles.icon} fas fa-desktop`}></i> View Website</a>
                                    <a className={styles.card__button} href="https://github.com/AbdellahBahsine/quotes-template" target="_blank"><i className={`${styles.icon} fas fa-code`}></i> View Code</a>
                                </div>
                            </div>
                        </div>

                        <div className={styles.projects__card}>
                            <div className={styles.card__image}>
                                <img className={styles.img} src={Montreal.src} alt="montreal" />
                            </div>
                            <div className={styles.card__content}>
                                <h3 className={styles.card__title}>Montreal</h3>
                                <p className={styles.card__text}>PSD to code website...</p>
                                <div className={styles.card__buttons}>
                                    <a className={styles.card__button} href="https://montreal-creative-portfolio.netlify.app/" target="_blank"><i className={`${styles.icon} fas fa-desktop`}></i> View Website</a>
                                    <a className={styles.card__button} href="https://github.com/AbdellahBahsine/Montreal-Creative-Portfolio" target="_blank"><i className={`${styles.icon} fas fa-code`}></i> View Code</a>
                                </div>
                            </div>
                        </div>

                        <div className={styles.projects__card}>
                            <div className={styles.card__image}>
                                <img className={styles.img} src={DOOM.src} alt="doom" />
                            </div>
                            <div className={styles.card__content}>
                                <h3 className={styles.card__title}>DOOM</h3>
                                <p className={styles.card__text}>PSD to code website...</p>
                                <div className={styles.card__buttons}>
                                    <a className={styles.card__button} href="https://doom-website.netlify.app/" target="_blank"><i className={`${styles.icon} fas fa-desktop`}></i> View Website</a>
                                    <a className={styles.card__button} href="https://github.com/AbdellahBahsine/01-DOOM" target="_blank"><i className={`${styles.icon} fas fa-code`}></i> View Code</a>
                                </div>
                            </div>
                        </div>

                        <div className={styles.projects__card}>
                            <div className={styles.card__image}>
                                <img className={styles.img} src={Reen.src} alt="reen" />
                            </div>
                            <div className={styles.card__content}>
                                <h3 className={styles.card__title}>REEN</h3>
                                <p className={styles.card__text}>PSD to code website...</p>
                                <div className={styles.card__buttons}>
                                    <a className={styles.card__button} href="https://reen-site.netlify.app/" target="_blank"><i className={`${styles.icon} fas fa-desktop`}></i> View Website</a>
                                    <a className={styles.card__button} href="https://github.com/AbdellahBahsine/REEN" target="_blank"><i className={`${styles.icon} fas fa-code`}></i> View Code</a>
                                </div>
                            </div>
                        </div>

                        <div className={styles.projects__card}>
                            <div className={styles.card__image}>
                                <img className={styles.img} src={AgencyTemplate.src} alt="agency-template" />
                            </div>
                            <div className={styles.card__content}>
                                <h3 class={styles.card__title}>Agency Template</h3>
                                <p className={styles.card__text}>PSD to code website...</p>
                                <div className={styles.card__buttons}>
                                    <a className={styles.card__button} href="https://agency-template-site.netlify.app/" target="_blank"><i className={`${styles.icon} fas fa-desktop`}></i> View Website</a>
                                    <a className={styles.card__button} href="https://github.com/AbdellahBahsine/agency-template" target="_blank"><i className={`${styles.icon} fas fa-code`}></i> View Code</a>
                                </div>
                            </div>
                        </div>

                        <div className={styles.projects__card}>
                            <div className={styles.card__image}>
                                <img className={styles.img} src={LoopStudios.src} alt="loopstudios" />
                            </div>
                            <div className={styles.card__content}>
                                <h3 className={styles.card__title}>Loopstudios</h3>
                                <p className={styles.card__text}>PSD to code website...</p>
                                <div className={styles.card__buttons}>
                                    <a className={styles.card__button} href="https://loopstudioslandingpage.netlify.app/" target="_blank"><i className={`${styles.icon} fas fa-desktop`}></i> View Website</a>
                                    <a className={styles.card__button} href="https://github.com/AbdellahBahsine/loopstudios-landing-page" target="_blank"><i className={`${styles.icon} fas fa-code`}></i> View Code</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Projects;