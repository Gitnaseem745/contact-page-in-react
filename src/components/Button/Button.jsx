import React from 'react'
import {MdMessage} from "react-icons/md"
import styles from './Button.module.css'
const Button = ({btnText, btnIcon, isOutline, ...rest}) => {
  return (
    <button className={isOutline ? styles.outlineBtn : styles.primaryBtn} {...rest} >{btnIcon} {btnText}</button>
  )
}

export default Button
