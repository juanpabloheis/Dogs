import React from 'react';
import styles from './Dog.module.css'

export default function Dog(props) {
    const { name, temperament, image } = props;
    return (
        <div className={styles.container}>
            <img src={image} alt='Not found'/>
            <h4 className={styles.title}>{name}</h4>
            <p>{temperament}</p>
        </div>
    )
}

