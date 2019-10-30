import React from 'react';
import styles from './../Messages.module.css';

const Message = (props) => {
    return <div className={styles.dialog}>{props.message}</div>
}

export default Message;