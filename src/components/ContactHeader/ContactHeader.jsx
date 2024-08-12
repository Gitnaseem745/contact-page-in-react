import React from 'react'
import styles from './ContactHeader.module.css'
const ContactHeader = () => {
  return (
    <div className={`${styles.contactSection}`}>
           <h1>CONTACT US</h1>
           <p>Let's connect: We're here to help and would love to hear from you! Whether you have a question, a comment, or just want to chat, feel free to reach out to us through the contact form on this page, or get in touch by phone, email, or social media.</p>
    </div>
  )
}

export default ContactHeader
