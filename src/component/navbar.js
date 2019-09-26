import React,{Component} from 'react';
import { useSpring, animated,useTrail } from 'react-spring'
import range from 'lodash-es/range'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { thisExpression } from '@babel/types';
import Link from '@material-ui/core/Link';

export default class NavBar extends Component{
  constructor(props){
    super(props);
    
  }

   createNavBar   = ()  =>{
    return(
      <this.App></this.App>
    )
    
  }
   App  = ()  => {
     console.log('dssdsds')
    const items = range(5)
    const name  = ['J','O','M','O','N']
const interp = i => r => `translate3d(0, ${15 * Math.sin(r + (i * 2 * Math.PI) / 1.6)}px, 0)`
 
    const { radians } = useSpring({
      to: async next => {
        while (1) await next({ radians: 2 * Math.PI })
      },
      from: { radians: 0 },
      config: { duration: 3500 },
      reset: true,
    })
    var j=0;
    return name.map(i => <animated.div key={j}  className="script-bf-box" style={{ transform: radians.interpolate(interp(j)) }} >
      <Typography variant="h5" component="h5">
      {i}
      </Typography>{j++}
      </animated.div>
      
      )
  }

  render(){
    return (
      <AppBar>
        <Toolbar>
          <this.createNavBar></this.createNavBar>
          <div className="navDiv" align="right">
            <div className="navLink">Home</div>
            <div className="navLink">About Me</div>
          </div> 
        </Toolbar>
        
      </AppBar>
    )
      
    
  }
}