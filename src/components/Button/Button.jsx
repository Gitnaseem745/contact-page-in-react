import React from 'react'
import {MdMessage} from "react-icons/md"
import styles from './Button.module.css'
const Button = ({btnText, btnIcon}) => {
  return (
    <button className={styles.primaryBtn}>{btnIcon} {btnText}</button>
  )
}

export default Button
