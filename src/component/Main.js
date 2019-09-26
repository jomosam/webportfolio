import React, { Component } from 'react';
import Navbar  from './navbar'
import About from './About'



export default class Main extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
               <div >
                   <Navbar></Navbar>
                   <About></About>
               </div>
                
        )
    }
}