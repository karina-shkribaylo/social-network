import React from 'react';
import s from './InfoComponent.module.css';
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from "../../../assets/images/user.png";

const InfoComponent = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div className={s.block}>
            <div>
                <img
                    src='https://joinup.ua/content/uploads/2015/07/Dubai-Design-District-TECOM-uae.jpg'/>
            </div>
            <div className={s.descriptionBlock}>
                
                <img src={props.profile.photos.large != null ? props.profile.photos.large : userPhoto}
                             className={s.userPhoto}/><br/>

               <div> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
            </div>
        </div>
    )
}

export default InfoComponent;