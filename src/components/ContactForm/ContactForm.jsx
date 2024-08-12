import React from 'react'
import styles from './ContactForm.module.css'
import Button from '../Button/Button'
import { MdMessage, MdPhone } from 'react-icons/md'

const ContactForm = () => {
  return (
    <section className={`${styles.container} container`}>
        <div className={styles.contactForm}>
            <Button
            btnText="Via Support Chat"
            btnIcon={<MdMessage />}
            />
            <Button
            btnText="Via Call"
            btnIcon={<MdPhone />}
            />
        </div>
        <div className={styles.contactImg}>

        </div>
    </section>
  )
}

export default ContactForm
