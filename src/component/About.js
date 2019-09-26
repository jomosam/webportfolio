import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {loremIpsum} from 'lorem-ipsum'
import Typist from 'react-typist'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(5, 2),
  },
}));

export default function PaperSheet() {
  const classes = useStyles();

  return (
    <div className="about" >
      <br/>  
      <Paper className={classes.root}>
  <div className="textStyle" >
  <Typography variant="h4" component="h4" >
     I am a Software Developer, graduate of Computer Science.
     </Typography> 
     <Typography variant="h4" component="h4">     
     <Typist>
     I have 5+ years’ commercial experience providing development, Back-End Development,ERP.
     </Typist>
  </Typography>   
  </div>
        
      </Paper>
    </div>
  );
}