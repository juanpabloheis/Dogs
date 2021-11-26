import React from 'react';
import styles from './Dog.module.css'

export default function Dog(props) {
    const { name, temperament, image } = props;
    return (
        <div className={styles.container}>
            <img src={image ? image : 'https://fearfuldogs.com/wp-content/uploads/2011/03/questioningdog-285x300.jpg'} alt='Not found'/>
            <h4 className={styles.title}>{name}</h4>
            <p>{temperament}</p>
        </div>
    )
}

