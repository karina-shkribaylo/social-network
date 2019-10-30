import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const Posts = (props) => {
    let allPosts =
        props.posts.map( p => <Post message={p.message} likesCount={p.likesCount}/>);

    let newPost = React.createRef();

    let onClickAddPost = () => {
        props.addPost();
    }

    let onChangeUpdateNewPost = () => {
        let text = newPost.current.value;
        props.updateNewPost(text);
    }

    return (
        <div className={s.postsBlock}>
            <h3>Your Recent Posts</h3>
            <div>
                <div>
                    <textarea onChange={ onChangeUpdateNewPost } ref={newPost}
                              value={props.newPostText} />
                </div>
                <div>
                    <button onClick={ onClickAddPost }>Post me</button>
                </div>
            </div>
            <div className={s.posts}>
                { allPosts }
            </div>
        </div>
    )
}

export default Posts;