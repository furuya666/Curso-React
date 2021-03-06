import React, {useState } from 'react';
export default function ContadorHooks(props){
    //contador    === variable de estado
    //setContado  ===  funcion que actualiza
    // useState(0)=== inicialisacion de la variable de estado
    const [contador, setContador] = useState(0)
    //console.log(useState())
    //arrow funcion para sumar hace el bindeo es mejor trabajar haci
    const sumar=()=>setContador(contador+1)
    //arrow funcion para restar hace el bindeo es mejor trabajar haci
    const restar=()=>setContador(contador-1)
    return(
        <>
        <h2>Hooks-useState</h2>
        <nav>
            <button onClick={sumar}>+</button>
            <button onClick={restar}>-</button>
        </nav>
        <p>Contador de {props.titulo}</p>
        {/**ya no es  >>>>this,state.contador
         *            >>>> si no la variable de state directo
         */}
        <h3>{contador}</h3>
        </>
    )
}
ContadorHooks.defaultProps={
    titulo:"Clicks",
}

