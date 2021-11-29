import React from 'react'
import { BsLinkedin, BsGithub } from "react-icons/bs";
import styles from './Footer.module.css'	

export default function Footer() {
    return (
        <div className={styles.container}>
            <p>by Dev. Juan Pablo Heis |</p>
            <div className={styles.icons}>
                <a href="https://www.linkedin.com/in/juanpabloheis/" target="_blank"  rel="noreferrer"><BsLinkedin />  </a>
                <a href="https://github.com/juanpabloheis/Dogs" target="_blank" rel="noreferrer"><BsGithub /></a>
            </div>
        </div>
    )
}
