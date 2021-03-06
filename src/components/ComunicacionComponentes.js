import React, { Component } from 'react';
export default class Padre extends Component{

    state={
        contador:0
    }

    incrementarContador=(e)=>{
        //modifica estado
        this.setState({
            contador:this.state.contador + 1
        })
    }
    render(){
        return(
            <div>
                      <h2>Comunicacion  entre Componentes</h2>
                      <p>
                          contador <b>{this.state.contador}</b>
                      </p>
                      <Hijo incrementarContador={this.incrementarContador} mensaje="Mensaje para el hijo  1"/>
                      <Hijo incrementarContador={this.incrementarContador} mensaje="Mensaje para el hijo  2"/>
                      

            </div>
        )
    }
} 

function Hijo(props){
    return(
        <>
          <h3>{props.mensaje}</h3>
          <button onClick={props.incrementarContador}>+</button>
        </>
       
    )
}