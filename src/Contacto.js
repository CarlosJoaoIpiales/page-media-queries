import React,{Fragment,  useState, useEffect}  from 'react';
import FormCli from "./Componets/FormCli";
import Navbar from './Componets/Navbar';

const imagenes = require.context('./imagenes/');

function Contacto () {

    const [cliente, setCliente] = useState({
        nombre: '',
        apellido: '',
        telefono: 0,
        correo: '',
        mensaje: '',
        asesor: '' 
      })

      const [clientes, setClientes] = useState([])

      const [listUpdated, setListUpdated] = useState(false)
      
      useEffect(() => {
        const getClientes = () => {
          fetch('http://localhost:9001/clientes')
          .then(res => res.json())
          .then(res => setClientes(res))
        }
        getClientes()
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
        <div className="row">
          <div className=''>
          <h2 style={{textAlign: 'center'}}>Contactos Form</h2>
          <FormCli cliente={cliente} setCliente={setCliente}></FormCli>
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
            <small>&copy; 2023 - Todos los Drechos Reservados</small>
        </div>
    </footer>

    
</body>
    </div>

    );
}

export default Contacto;