import React from "react";

const imagenes = require.context('./imagenes/');

const TerrenoC= () => (
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


    <div class="detalle-grid">
    <img src={imagenes("./anuncios/terreno3.jpg")} alt=""/>
				<div class="detalles-content">
					<h1>Terreno, Sector Marianas, Carapungo</h1>
{/* 						<p class="price"><b>Precio: </b> $${producto.price}</p> */}
						<p class="description">
							<b>Descripcion: </b> <span>
                            El terreno está ubicado en el sector de Marianas, se encuentra a 600 metros aproximadamente del centro de salud del barrio , en dirección norte, además de lo anterior, posee una vista provilegiada de la ciudad y está próximo a una institución de salud y a un centro educacional, y posee locomoción colectiva que llega directamente al sector.
              </span>
						</p>


            <h1>Datos</h1>
            <div class="datos">
            <div class="grid-item">ID Propiedad;</div>
            <div class="grid-item">1134</div>
            <div class="grid-item">Localizacion:</div>  
            <div class="grid-item">Quito</div>
            <div class="grid-item">Estado:</div>
            <div class="grid-item">Venta</div>  
            <div class="grid-item">Area:</div>
            <div class="grid-item">24m^2</div>
            <div class="grid-item">Acometidas</div> 
            <div class="grid-item">Si</div>
            <div class="grid-item">Escrituras</div>  
            <div class="grid-item">En Tramite</div>
            </div>


				</div>
			</div>


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

export default TerrenoC;