import React from 'react';
import s from '../../Profile/Profile.module.css';
import Preloader from '../../../Preloader/Preloader';

const ProfileInfo = (props) => {
    if(!props.profile) {
        return <Preloader />
    }


    return (
        <div>
            <div className={s.main}>
                <img 
                    src ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3Q-JQJq_jLb_WKDVaSweg9M-4gZxp5mnMAXrF3gjnW3P5-TH8fg'/>
            </div>
            <div className={s.descriptionBlock}>
            <img src={props.profile.photos.large}/>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;