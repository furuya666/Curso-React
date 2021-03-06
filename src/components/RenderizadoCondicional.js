import React, { Component } from 'react';


function Login(){
    return(

        <div>
            <h3>Login</h3>
        </div>
    
          )
        
}
function Logout(){
    return(
        <div>
            <h3>Logout</h3>
        </div>
    )
}
export default class RenderizadoCondicional extends Component{
    //crea un estado
    constructor(props){
        //llama el contructor de component
      super(props);
      //crea variables
      this.state={
          session: true
      }
    }
    render(){
        return(
            <div>
                <h1>Renderizado Condicional</h1>
                {this.state.session ? <Login/> : <Logout/>}     
            </div>
        )
    }
}