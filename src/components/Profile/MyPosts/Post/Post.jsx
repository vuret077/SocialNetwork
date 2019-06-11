import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://randomuser.me/api/portraits/men/28.jpg"/>
            {props.message}
            <div>
                <span>Like</span>
            </div>
        </div>
    );
}

export default Post;
