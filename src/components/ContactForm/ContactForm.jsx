import React from 'react'
import styles from './ContactForm.module.css'
import Button from '../Button/Button'
import { MdMail, MdMessage, MdPhone } from 'react-icons/md'

const ContactForm = () => {
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
            <form>
                <div className={styles.formContainer}>
                <label htmlFor="Name">Name</label>
                <input type="text" name='name'/>
                </div>
            </form>
        </div>
        <div className={styles.contactImg}>

        </div>
    </section>
  )
}

export default ContactForm
