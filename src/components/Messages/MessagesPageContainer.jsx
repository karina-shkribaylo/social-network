import React from 'react';
import {sendMessageActionCreator, updateMessageActionCreator} from "../../redux-components/MessagesPageReducer";
import MessagesPage from "./MessagesPage";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        sendOneMessage: () => {
            dispatch(sendMessageActionCreator());
        },
        updateMessage: (body) => {
            dispatch(updateMessageActionCreator(body));
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(MessagesPage);