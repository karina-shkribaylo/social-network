import React from 'react';
import InfoComponent from "./InformationComponent/InfoComponent";
import PostsContainer from "./PostsComponent/PostsContainer";
import s from './Profile.module.css';

const ProfilePage = (props) => {
    return (
        <div className={s.block}>
            <InfoComponent profile={props.profile} />
            <PostsContainer profile={props.profile} />
        </div>
    )
}

export default ProfilePage;