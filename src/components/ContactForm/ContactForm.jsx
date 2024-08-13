import React, { useState } from 'react'
import styles from './ContactForm.module.css'
import Button from '../Button/Button'
import { MdMail, MdMessage, MdPhone } from 'react-icons/md'
import { helpImg } from '../../assets'

const ContactForm = () => {


    const [name, setName] = useState('John Doe');
    const [email, setEmail] = useState('support@gmail.com');
    const [message, setMessage] = useState('How can we help you?');

    const onSubmit = (event) => {
        event.preventDefault();
        setName(event.target[0].value);
        setEmail(event.target[1].value);
        setMessage(event.target[2].value);
    }

  return (
    <section className={`${styles.container} container`}>
        <div className={styles.contactForm}>
            <div className={styles.topBtn}>
            <Button
            btnText="Via Support Chat"
            btnIcon={<MdMessage fontSize="24px"/>}
            />
            <Button
            btnText="Via Call"
            btnIcon={<MdPhone fontSize="24px"/>}
            />
            </div>
            <Button
            isOutline={true}
            btnText="Via Email Form"
            btnIcon={<MdMail fontSize="24px"/>}
            />
            <form onSubmit={onSubmit}>
                <div className={styles.formContainer}>
                <label htmlFor="Name">Name</label>
                <input type="text" name='name'/>
                </div>
                <div className={styles.formContainer}>
                <label htmlFor="email">E-Mail</label>
                <input type="email" name='email'/>
                </div>
                <div className={styles.formContainer}>
                <label htmlFor="message">Message</label>
                <textarea name='message' rows={5}/>
                </div>
                <div className='flex justify-end'>
                <Button
                btnText="Submit"
               />
                 </div>
               <div className="check-vals">
                {name + " " + email + " " + message }
               </div>
            </form>
        </div>
        <div className={styles.contactImg}>
            <img src={helpImg} />
        </div>
    </section>
  )
}

export default ContactForm
