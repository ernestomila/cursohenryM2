import React from 'react'
import styles from "./Button.module.css";

const Button = ({onClick, children, icon}) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {icon && <div className={styles.icon}>{icon}</div>}
      {children}</button>
  )
}

export default Button;