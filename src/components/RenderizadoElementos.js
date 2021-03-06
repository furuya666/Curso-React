import React, { Component } from 'react';
import data from "../helpers/data.json"
function ElementoLista(props){
   return(
       <div>
           <li>
               <a href={props.el.web} target="_blank">{props.el.name}</a>
           </li>
       </div>
   )
}
export default class RenderizadoElementos extends Component{
    constructor(props){
      super(props)
      this.state={
          seasons:["primavera","verano","otoño","invierno"]
      }
    }
    render(){
        console.log(data)
        return(
            <div>
                <h2>Renderizado de Elementos</h2>
                <h3>Estaciones del año</h3>
                <ol>
                    {
                        this.state.seasons.map((el,index)=>(
                            // key es como un primary key siempre se usa react te lo pide
                             <li key={index}>{el}</li>
                         ))
                    }
                </ol>
                <h3>Frameworks  Frontend Javascript</h3>
                    <ul>
                        {
                           data.frameworks.map((el)=>(
                              <ElementoLista key={el.id} el={el}/>
                           ))

                           
                        }
                    </ul>
            </div>
        )
    }
}