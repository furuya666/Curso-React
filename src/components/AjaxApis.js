import React, { Component } from 'react';
function Pokemon(props){
   return(
       <figure>
           <img src={props.avatar} alt={props.name}></img>
           <figcaption>{props.name}</figcaption>
       </figure>
   )
}

export default class AjaxApis extends Component{
    state={
        pokemons:[]
    }
    //lo mas recomendable  para hacer peticiones usar esta funcion
    componentDidMount(){
        let url ="https://pokeapi.co/api/v2/pokemon/"
        fetch(url)
        // respuesta convierte a json
        .then(res=> res.json())
        // se ejecuta respuesta en json
        .then((json)=>{
            // imprime la peticion en json
            //console.log(json)
            json.results.forEach((el)=>{
               fetch(el.url)
               .then((res)=>res.json())
               .then((json)=>{
                   //console.log(json)
                   let pokemom={
                       id:json.id,
                       name:json.name,
                       avatar:json.sprites.front_default
                   }
                   //de lo q ya hay en pokemons agrega pokemon
                   let pokemons=[...this.state.pokemons, pokemom]
                   //actualiza estado
                   // pokemons:pokemons
                   // tambien se pone como
                   // pokemons
                   this.setState({
                       pokemons
                   })
               })
            })
        })
    }
    render(){
        return(
            <div>
                <h2>Peticiones asincronas en componentes de clase</h2>
                {/*
                    {this.state.pokemons.map(el=>
                        <Pokemon key={el.id} name={el.name} avatar={el.avatar}/>)}
                */
                }
                {/** Renderizado condicional*/}
                {this.state.pokemons.length === 0 ? <h3>Cargando...</h3>:
                 this.state.pokemons.map(el=>
                 <Pokemon key={el.id} name={el.name} avatar={el.avatar}/>)
                }
               
            </div>
        )
    }
}