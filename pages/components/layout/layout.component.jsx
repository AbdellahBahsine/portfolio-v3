import Head from 'next/head'
import styles from './layout.module.css';
import {useState} from 'react';
import { useRouter } from 'next/router'

import Header from '../header/header.component';
import Footer from '../footer/footer.component';
import MobileNav from '../mobile-nav/mobile-nav.component';

import Shape from '../../../public/images/Shape.png';

const Layout = ({children}) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    const { asPath } = useRouter();

    if(asPath === "/projects"){
        return(
            <div className="layout">
                <Head>
                    <title>Abdellah Bahsine - Front End Developer</title>
                    <meta name="description" content="Generated by create next app" />
                    <link rel="icon" href="/" />
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Assistant&family=Lato:wght@300;400;700&family=Merriweather&display=swap" rel="stylesheet" />
                </Head>
                <Header handleClick={handleClick} isOpen={isOpen} />
                <MobileNav isOpen={isOpen} />
                <main className={styles.main}>
                    {children}
                </main>
                <Footer />
            </div>
        )
    } 

    return(
        <div className="layout">
            <Head>
                <title>Abdellah Bahsine - Front End Developer</title>
                <meta name="description" content="Abdellah Basine is a front-end developer based in Morocco. He creates clean and responsive websites." />
                <link rel="icon" href="/" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Assistant&family=Lato:wght@300;400;700&family=Merriweather&display=swap" rel="stylesheet" />
            </Head>
            <img className={styles.shape1} src={Shape.src} alt="shape" />
            <Header handleClick={handleClick} isOpen={isOpen} />
            <MobileNav isOpen={isOpen} />
            <main className={styles.main}>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout;