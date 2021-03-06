import React, { Component } from 'react';

class Reloj extends Component{
     constructor(props){
        super(props)
     }
     componentWillUnmount(){
        console.log(3,"El componente ha sido eliminado del DOM")
    }
     render(){
         return(
             <h3>{this.props.hora}</h3>
         )
     }
}

export default class CicloVida extends Component{
    constructor(props){
        super(props)
        console.log(0,"El componente se inicialisa aun no esta en el doom")
        this.state={
            // da la hora local
            hora:new Date().toLocaleTimeString(),
            visible:false
        }
        this.temporizador = null
    }
    //bindeo
    tictac =()=>{
        this.temporizador=setInterval(()=>{
            this.setState({
                hora: new Date ().toLocaleTimeString()
            })
        },1000)
    }
    ////estado de un componente

    componentDidMount(){
        console.log(1,"El componente ya se encuentra en el DOM")
    }
     //recupera un stado anterior
    componentDidUpdate(prevProps,prevState){
        console.log(2,"El estado a los props  del compoenente han cambiado")
        console.log(prevProps)
        console.log(prevState)
    }

    
    iniciar =()=>{
        this.tictac()
        this.setState({
            visible:true
        })
    }

    detener=()=>{
         clearInterval(this.temporizador)
         this.setState({
             visible:false
         })
    }
    render(){
        console.log(4,"El componente se dibuja o redibuja por algun cambio en el doom")
        return(
            <div>
                <h2>ciclo de vida de los componentes de clase</h2>
                {/*renderisado condicional*/ }
                {this.state.visible && <Reloj hora={this.state.hora}/>}
                <button onClick={this.iniciar}>iniciar</button>
                <button onClick={this.detener}>detener</button>
            </div>
        )
    }
}