import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux-components/ProfilePageReducer";
import Posts from "./Posts";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
        photos: state.profilePage.photos
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewPost: (text) => {
            let action = updateNewPostTextActionCreator(text);
            dispatch(action);
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Posts);