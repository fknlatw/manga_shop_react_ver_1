import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from "./ContactForm.module.css";

const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        // const {user_email, from_name, message} = form.current
            emailjs.sendForm(
                "service_plzbw9p", 
                "template_p6tx8eg", 
                form.current, {
                    publicKey: "L2eLWDE9cOdpwoOnc"
                }
            ).then(
                () => {
                    console.log("SUCCESS!");
                },
                (error) => {
                    console.log("FAILED...", error.text)
                }
            );
        
        
    }

    return (
        <form 
            className={styles.form}
            ref={form} 
            onSubmit={sendEmail}
        >
            <h1 className={styles.contactUs}>Написать нам</h1>

            <label>Имя</label>
            <input 
                type="text" 
                name="from_name"
                required
            />

            <label>Почта</label>
            <input 
                type="email" 
                name="user_email"
                required
            />

            <label>Текст сообщения</label>
            <textarea  
                name="message"
                required
            />

            <button className={styles.submitButton} type="submit">Отправить</button>

        </form>
    )
}

export default ContactForm;