import React from 'react'
import styles from "./Loading.module.css";

export default function Loading() {
    return (
        <div className={styles.container}>
            <img src="https://transparencia.saofrancisco.ro.gov.br/CARTA/modules/mod_k2_filter/assets/images/loading.png" alt="waiting" />
        </div>
    )
}
