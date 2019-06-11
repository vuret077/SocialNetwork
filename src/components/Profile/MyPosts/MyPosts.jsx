import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const MyPosts = () => {
    return (
        <div>
            My Posts
            <div>
                <textarea></textarea>
                  <Button variant="contained" color="primary">
                    Add Post
                  </Button>
            </div>
            <div className={s.posts}>
                <Post message="Hi, how are you?"/>
                <Post message="It's my first post!"/>
            </div>
        </div>
    );
}

export default MyPosts;
