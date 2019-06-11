import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import UserInfo from './UserInfo/UserInfo';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();
    return (
          <div className={classes.root}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <UserInfo />
              </Grid>
              <Grid item xs>
              </Grid>
              <Grid item xs={6}>
            <MyPosts />
            </Grid>
            <Grid item xs>
            </Grid>
            </Grid>
          </div>
    );
}
