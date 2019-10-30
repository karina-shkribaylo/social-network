import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='https://cdn.freelance.ru/img/portfolio/pics/00/37/9B/3644384.jpg?mt=57607de1'></img>
            {props.message}
            <div>
                <span>Like {props.likesCount}</span>
                
            </div>
        </div>
    )
}

export default Post;