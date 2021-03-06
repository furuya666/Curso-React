import React ,{useState,useEffect}from 'react';
export default function ScrollHooks(){
    const [scrollY, setScrollY] = useState(0)
    const [name, setName] = useState("Gary")
    //componentDidMount
    useEffect(() => {
       console.log("Moiendo Scroll");
       const detertarScroll=()=>(setScrollY(window.pageYOffset))
    
       window.addEventListener("scroll",detertarScroll)
       return ()=>{
           window.removeEventListener("scroll",detertarScroll)
           console.log("Fase de desmontaje")
        }  
    },[scrollY])
    useEffect(() => {
         console.log("Fase de Montaje")
    },[])

    useEffect(() => {
        console.log("Fase de Actualizacion")
    })

    useEffect(() => {
        console.log("Fase de Desmontaje")

        return()=>{

        }
    })

  
    return(
        <>
        <h2>Hooks-useEffect y el ciclo de vida</h2>
        <p>ScrollY del Navegador {scrollY}px</p>
        </>
    )
}