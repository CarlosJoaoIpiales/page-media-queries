import React from "react";

const imagenes = require.context('./imagenes/');

const SuitA= () => (
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
    <img src={imagenes("./anuncios/suit1.jpg")} alt=""/>
				<div class="detalles-content">
					<h1>Suit, La Carolina</h1>
{/* 						<p class="price"><b>Precio: </b> $${producto.price}</p> */}
						<p class="description">
							<b>Descripcion: </b> <span>
              Vendemos una suit en un sector comercial de Quito. Tiene 3 habitaciones y 3 baños. Tiene garaje. Hay un jardín en frente. La casa tiene varias ventanas, es cómoda, espaciosa y fresca. Los baños, el techo, las paredes y todas las partes de la casa están en buen estado. La sala tiene una chimenea para que la casa se caliente durante el invierno.
              </span>
						</p>
						<p class="description">
							<span>La suit se encuentra en un sector comercial. Hay suficiente espacio para construir aún más. Es bonita y está ubicada en un lugar seguro.</span>
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
            <div class="grid-item">Cuartos</div> 
            <div class="grid-item">6</div>
            <div class="grid-item">Baños:</div>  
            <div class="grid-item">3</div>
    
            </div>

            <div class="comodidades">
              <h1>Comodidades</h1>
            <ul class="list-a no-margin">
                <li>Balcony</li>
                <li>Outdoor Kitchen</li>
                <li>Cable Tv</li>
                <li>Deck</li>
                <li>Tennis Courts</li>
                <li>Internet</li>
                <li>Parking</li>
                <li>Sun Room</li>
                <li>Concrete Flooring</li>
              </ul>
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

export default SuitA;