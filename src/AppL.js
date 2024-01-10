import React,{Fragment,  useState, useEffect}  from 'react';
import Navbar from './Componets/Navbar';
import InmuebleList from './Componets/InmuebleList';
import Form from './Componets/Form';
const imagenes = require.context('./imagenes/');

function App() {
 
  const [inmueble, setInmueble] = useState({
    ubicacion: '',
    sector: '',
    extension: 0,
    costo: 0,
    encargado: '',
    fechaDisponibilidad: '',
    tipo:''
  })
  const [inmuebles, setInmuebles] = useState([])

  const [listUpdated, setListUpdated] = useState(false)
  
  useEffect(() => {
    const getInmuebles = () => {
      fetch('http://localhost:9000/api')
      .then(res => res.json())
      .then(res => setInmuebles(res))
    }
    getInmuebles()
    setListUpdated(false)
  }, [listUpdated])

  return (

    <div class="Grupo2">

<body>
    <header class="header inicio">
        <div id="cont-fondo">
            <div class="contenedor contenido-header">
                <div class="barra">
                    <a href="inicio">
                        <img src={imagenes("./Logo.png")} width="150" height="150"/>
                    </a>
                    <div class="derecha">
                        {/* <img class="dark-mode-boton" src={imagenes("./dark-mode.svg")}/> */} 
                        <i class="fa-solid fa-bars" id="btn_menu"></i>
                        <div id="back_menu"></div>
                        <nav class="navegacion" id="nav">
                            <img src={imagenes("./Logo.png")} width="150" height="150"/>
                            <a href="nosotros">Nosotros</a>
                            <a href="anuncios">Anuncios</a>
             
                            <a href="contacto">Contacto</a>
                        </nav>
                    </div>
                </div>           
            </div>
        </div>
    </header>


    <Fragment>
      <Navbar brand=''></Navbar>  
      <div className="container">
        <nav class="nave" id="nave">
            <a href="agregar">
                <button className="btn btn-primary">Agregar</button>
            </a>
            <a href='editar'>
            <button className="btn btn-dark">Editar</button>
            </a>
        </nav>
        <div className="row">
          <div className="">
          <h2 style={{textAlign: 'center'}}>Lista de Inmuebles</h2>
          <InmuebleList inmueble={inmueble} setInmueble={setInmueble} inmuebles={inmuebles}  setListUpdated={setListUpdated} ></InmuebleList>
          </div>
        </div>
      </div>
    </Fragment>


    <footer class="pie-pagina">
        <div class="grupo-1">
            <div class="box">
                <figure>
                    <a href="/inicio">
                        <img src={imagenes("./Logo.png")} width="150" height="150" alt="Logo Inmo.Quito"/>
                    </a>
                </figure>
            </div>
            <div class="box">
                <h2>CONTACTANOS</h2>
                <p>Telf. +593 979376609</p>
                <p>Dir. Av. America</p>
            </div>
            <div class="box">
                <h2>SÍGUENOS</h2>
                <div class="red-social">
                    <img src={imagenes("./icon-facebook.svg")} alt="Icono seguridad" loading="lazy"/>
                    <img src={imagenes("./icon-instagram.svg")} alt="Icono seguridad" loading="lazy"/>
                    <img src={imagenes("./icon-twitter.svg")} alt="Icono seguridad" loading="lazy"/>
                    <img src={imagenes("./icon-youtube.svg")} alt="Icono seguridad" loading="lazy"/>
                </div>
            </div>
        </div>
        <div class="grupo-2">
            <small>&copy; 2023 - Todos los Drechos Reservados GRUPO-2</small>
        </div>
    </footer>

    
</body>
    </div>


  );
}

export default App;
