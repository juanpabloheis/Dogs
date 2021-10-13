import React from 'react'
import styles from "./Loading.module.css";

export default function Loading() {
    return (
        <div className={styles.container}>
            <img src="https://gifimage.net/wp-content/uploads/2017/08/spinner-gif-13.gif" alt="waiting" />
        </div>
    )
}
