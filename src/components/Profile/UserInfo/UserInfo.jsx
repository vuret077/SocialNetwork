import React from 'react';
import s from './UserInfo.module.css';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  bigAvatar: {
    margin: 50,
    width: 250,
    height: 250,
  },
});

export default function ImageAvatars() {
  const classes = useStyles();

  return (
    <Grid container  spacing={1}>
      <Grid item xs={4}>
        <Avatar alt="Remy Sharp" src="https://randomuser.me/api/portraits/men/28.jpg" className={classes.bigAvatar} />
      </Grid>
      <Grid item xs={4}>
        <h1>Firsname Lastname</h1>
      </Grid>
      <Grid item xs={4}>
        <h1>Firsname Lastname</h1>
      </Grid>
    </Grid>
  );
}
