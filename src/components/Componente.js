import React,{Component} from 'react';
// 1 Forma de hacer
// class Componente extends Component{
//    render(){
//        return <h2>{this.props.a}</h2>
//    }
// }


//Segunda forma de hacer un componente
// function Componente(props){
//     return <h2>{props.a}</h2>
// }

///3 forma de hacer un componente
const Componente=(props)=><h2>{props.a}</h2>;
export default Componente;
