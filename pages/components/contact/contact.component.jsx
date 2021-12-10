import styles from './contact.module.css';
import {useState} from 'react';

const Contact = () => {

    const [isPopout, setIsPopout] = useState(false);
    const [mailerState, setMailerState] = useState({
        name: "",
        email: "",
        message: "",
    });

    const {name, email, message} = mailerState;

    const handleStateChange = e => {
        setMailerState(prevState => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }));
    }

    const submitEmail = (e) => {
        e.preventDefault();

        if(name.length === 0){
          alert("Enter name");
          return;
        }

        const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if(!email.match(validRegex)){
          alert("Enter email");
          return;
        }

        if(message.length === 0){
          alert("Enter message")
          return;
        }

        fetch("api/contact", {
          method: "POST",
          headers: {
            'Accept': 'application/json, text/plain, */*',
            "Content-type": "application/json"
          },
          body: JSON.stringify({ mailerState }),
        })
          .then((res) => res.json())
          .then((res) => {
            if (res.status === "success") {
              setIsPopout(true);
            } else if (res.status === "fail") {
              alert("Message failed to send");
            }
          })
          .then(() => {
            setMailerState({
              email: "",
              name: "",
              message: "",
            });
        });
    };

    return (
        <section id="contact" className={styles.contact}>
            <div className={styles.contact__inner}>
                <div className={styles.contact__details}>
                    <h2 className={styles.contact__title}>Get In <span>Touch</span></h2>
                    <p>If you have any questions or you want to hire me, feel free to contact me at one of these places or just send me a message in the contact form.</p>
                    <div className={styles.socials}>
                        <a href="https://www.linkedin.com/in/abdellah-bahsine-20a313222/" target="_blank" className={styles.social}><i className="fab fa-linkedin-in"></i></a>
                        <a href="https://github.com/AbdellahBahsine" target="_blank" className={styles.social}><i className="fab fa-github"></i></a>
                        <a href="https://twitter.com/" target="_blank" className={styles.social}><i className="fab fa-twitter"></i></a>
                    </div>
                </div>
                <div className={styles.contact__form}>
                    <form onSubmit={submitEmail} className={styles.form}>
                        <input className={styles.name} type="text" placeholder="Name" name="name" onChange={handleStateChange} value={mailerState.name} />
                        <input className={styles.email} type="email" placeholder="Email" name="email" onChange={handleStateChange} value={mailerState.email} />
                        <textarea className={styles.message} name="message" cols="30" rows="10" placeholder="Message" onChange={handleStateChange} value={mailerState.message}></textarea>
                        <button className={`${styles.cta} ${styles.primary}`} type="submit">Submit</button>
                        {isPopout ?
                        <div className={styles.popout}>
                          <div class={styles.popout__inner}>
                            <i className={`${styles.popout__icon} far fa-check-circle`}></i> 
                            <span className={styles.line}></span>
                            <p>Thank you for your message. <br /> It has been sent.</p>
                            <button onClick={() => setIsPopout(false)}>OK</button>
                          </div>
                        </div>
                        : ''}
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact;