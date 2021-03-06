import React, { Component } from 'react';
export  class EventosES6 extends Component{

    constructor(props){
       super(props);
       this.state={
           contador: 0,
       }
       // hacer el bind en el constructor
       //se le declara al this de la clase una propiedad sumar
       //iguala al metodo sumar a ese metodo le enlasa this
       this.sumar=this.sumar.bind(this);
       this.restar=this.restar.bind(this);
    }

    sumar(e){
        console.log("sumando");
        console.log(this);
        this.setState({
            contador: this.state.contador + 1,
        })
    }
    restar(e){
        console.log("restando");
        console.log(this);
        this.setState({
            contador: this.state.contador - 1,
        })
    }

// la funcion sumar se puede hacer de 2 formas
// 1 sumar() se ejecuta automaticamente cuando recargas la pagina
// 2 sumar se ejecuta cuando tu le indicas
render(){
    return(
        <div>
            <h2>Eventos en componentes de clases ES6</h2>
            <h3>{this.state.contador}</h3>
            <nav>
                
                <button onClick={this.sumar}>+</button>
                <button onClick={this.restar}>-</button>
            </nav>
        </div>
    )
}


}
// Properties initializer
export  class EventosES7 extends Component{

   
       state={
           contador: 0,
       }
       // hacer el bind en el constructor
       //se le declara al this de la clase una propiedad sumar
       //iguala al metodo sumar a ese metodo le enlasa this
     
////Arrow functions >>> heredan el this del contexto que se encuentran ya no se hace bind
//metodos definidos como de forma expresada mediante una arrow functions   
sumar=(e)=>{
        console.log("sumando");
        console.log(this);
        this.setState({
            contador: this.state.contador + 1,
        })
    }
    restar=(e)=>{
        console.log("restando");
        console.log(this);
        this.setState({
            contador: this.state.contador - 1,
        })
    }
// la funcion sumar se puede hacer de 2 formas
// 1 sumar() se ejecuta automaticamente cuando recargas la pagina
// 2 sumar se ejecuta cuando tu le indicas
render(){
    return(
        <div>
            <h2>Eventos en componentes de clases ES7</h2>
            <h3>{this.state.contador}</h3>
            <nav>
                
                <button onClick={this.sumar}>+</button>
                <button onClick={this.restar}>-</button>
            </nav>
        </div>
    )
 }
}


// function Boton(props){
//     return (
//         <button onClick={props.myOnonClick}>Boton hecho componente</button>
//     )
// }
 ////Una forma mas efectiva
// const Boton =(props)=>(
//     <button onClick={props.myOnonClick}>Boton hecho componente</button>
// )
////otra forma mucho mas efectiva
const Boton =({myOnonClick})=>(
    <button onClick={myOnonClick}>Boton hecho componente</button>
)
export class MasSobreEventos extends Component{
    ///enviando parametros
    handleClick=(e,mensaje)=>{
        console.log(e);
        console.log(e.target)
        console.log(e.nativeEvent)
        console.log(e.nativeEvent.target)
        console.log(mensaje)
    }
    render(){
        return(
            <div>
                <h2>Mas sobre eventos</h2>
                <button onClick={(e)=>this.handleClick(e,"Hola pasando parametros desde un evento")}>Saludar</button>
                {/**EventoPersonalizado */}
                {/*<Boton onClick={(e)=>this.handleClick(e,"Hola pasando parametros desde un evento")}/>
    */}
                <Boton myOnonClick={(e)=>this.handleClick(e,"Hola pasando parametros desde un evento")}/>
            </div>
        )
    }

}