import React from "react";

const imagenes = require.context('./imagenes/');

const Nosotros = () => (

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
                        {/* <img class="dark-mode-boton" src={imagenes("./dark-mode.svg")}/>  */}
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

    <main>
        <div class="nosotros1">
            <br></br>
        <table>
            <tr>
                <div class="mision1">
                    <td>
                        <img class="mision" src={imagenes("./mision.png")} width="400" height="200" align="center"/>
                        </td>
                        <td>
                            <b>MISIÓN</b>
                            <p>Ofrecemos un servicio personalizado de asesoramiento inmobiliario diseñado para satisfacer las necesidades 
                            de nuestros clientes. Trabajamos con ética, honestidad y cuidado en todas las etapas de venta, compra o 
                            alquiler. Confiamos en nuestra experiencia y formación en este campo.</p>
                        </td>
                </div>
            </tr>

            <tr>
                <td> </td>    
            </tr>
            <tr>
                <section class="mision1">
                    <td>
                        <b>VISIÓN</b>
                        <p>Ser la mejor opción para quienes necesitan la ayuda de agentes inmobiliarios que brinden
                            el asesoramiento más innovador en una relación cercana y resolutiva. Permite que 
                            nuestros clientes se sientan totalmente respaldados y asesorados durante todo el 
                            proceso de compra de una vivienda.</p>     
                    </td>
                    <td>
                        <img class="vision" src={imagenes("./vision.png")} width="300" height="200" align="center"/>
                        
                    </td>
                </section>
            </tr>
        </table>
        </div>
    </main>

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

export default Nosotros;