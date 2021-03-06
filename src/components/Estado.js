import React, { Component } from 'react';
// un componente funcional no puede tener estado pero se le puede  pasar del padre
function EstadoAHijoUno(props){
    return(
        <div>
            <h3>{props.contadorHijo}</h3>
        </div>
    )
}
function EstadoAHijoDos(props){
    return(
        <div>
            <h2>{props.contadorHijo}</h2>
        </div>
    )
}
export default class Estado extends Component{
    //crea un estado
    constructor(props){
        // hereda el constructor de Componente
         super(props);
         this.state={
             contador:0,
         }

        //  setInterval(()=>{
        //    this.setState({
        //        contador:this.state.contador+1
        //    });
        //  },1000)
    }
    render(){
        return(
            <div>
                <h2>El State</h2>
                <p>{this.state.contador}</p>
                <EstadoAHijoUno contadorHijo={this.state.contador}/>
                <EstadoAHijoDos contadorHijo={this.state.contador}/>

            </div>
        )
    }
}
