import React from 'react'
import { brandLogo } from '../../assets'
import styles from "./Navbar.module.css"

const Navbar = () => {
  return (
    <>
    <nav className={`${styles.navbar} container`}>
        <div>
            <img src={brandLogo} />
        </div>
        <div className={`${styles.navLinks}`}>
            <p>HOME</p>
            <p>ABOUT</p>
            <p>CONTACT</p>
        </div>
    </nav>
    </>
  )
}

export default Navbar
