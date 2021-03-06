import logo from './logo.svg';
import './App.css';
import Componente from "./components/Componente"
import Propiedades from './components/Propiedades';
import Estado from './components/Estado';
import RenderizadoCondicional from './components/RenderizadoCondicional';
import RenderizadoElementos from './components/RenderizadoElementos';
//destructurado ya no default
import {EventosES6,EventosES7,MasSobreEventos} from './components/Eventos';
import ComunicacionComponentes from './components/ComunicacionComponentes'
import CicloVida from './components/CicloVida';
import AjaxApis from './components/AjaxApis';
import ContadorHooks from './components/ContadorHooks';
import ScrollHooks from './components/ScrollHooks';
import RelojHooks from './components/RelojHooks';
function App() {
  let nombre="Gary";
  let estaciones=["primavera","verano","otoño","invierno"];
  return (
    <div className="App">
      <header className="App-header">
        <section>
        <img src={logo} className="App-logo" alt="logo" />
        <label htmlFor="nombre">Nombre</label>
        <input type="text" id="nombre" autoComplete="off" placeholder="Escriba nombre"/>
        <h1>{nombre}</h1>
        <p>
          Editar <code>src/App.js</code> and save to reload.
        </p>
        <p>{2+1}</p>
        <ul>
          
          {estaciones.map((el,index)=>(
            <li key={index}>{el}</li>
          ))}
        </ul>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        </section>
        <section>
        <Componente a="Hola soy un componente desde props"/>
        <hr></hr>
        <Propiedades 
        cadena="Esto es una cadena de texto" 
        numero={19} 
        booleano={false}
        arreglo={[1,2,3]}
        objeto={{
                 nombre:"gary",
                 correo:"furuyagary@gmail.com"
                }}
        elementoReact={<i>Esto es un elemento React</i>}
        funcion={(num)=>num*num}

        componenteReact={
          <Componente a="soy un componente pasado como props"/>
          }
        />
        <hr></hr>
          <Estado/>
          <hr/>
          <RenderizadoCondicional/>
          <hr/>
          <RenderizadoElementos/>
          <hr></hr>
          <EventosES6/>
          <hr></hr>
          <EventosES7/>
          <hr></hr>
          <MasSobreEventos/>
          <hr></hr>
          <ComunicacionComponentes/>
          <hr></hr>
          <CicloVida/>
          <hr></hr>
          <AjaxApis/>
          <hr></hr>
          <ContadorHooks titulo="Seguidores"/>
          <hr></hr>
          <ScrollHooks/>
          <hr></hr>
          <RelojHooks/>

      </section>
      </header>
     
    </div>
  );
}

export default App;
