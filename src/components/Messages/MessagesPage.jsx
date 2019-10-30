import React from 'react';
import styles from './Messages.module.css';
import MessagesItem from "./MessagesItem/MessagesItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";

const MessagesPage = (props) => {

    let state = props.messagesPage;
    let allMessagesElements = state.dialogs.map( d => <MessagesItem name={d.name} key={d.id} id={d.id} />  );
    let oneMessageElement = state.messages.map( m => <Message message={m.message} key={m.id} /> );
    let newMessage = state.newMessage;

    let onClickSend = () => {
        props.sendOneMessage();
    }

    let onChangeNewMessage = (e) => {
        let body = e.target.value;
        props.updateMessage(body);
    }

    if (!props.isAuth) return <Redirect to={"/login"} /> ;

    return (
        <div className={styles.dialogs}>
            <div className={styles.MessagesItem}>
                { allMessagesElements }
            </div>
            <div className={styles.messages}>
                <div>{ oneMessageElement }</div>
                <div>
                    <div><textarea value={newMessage}
                                   onChange={onChangeNewMessage}
                                   placeholder='Enter your message'></textarea></div>
                    <div><button onClick={onClickSend}>Send</button></div>
                </div>
            </div>
        </div>
    )
}

export default MessagesPage;

























