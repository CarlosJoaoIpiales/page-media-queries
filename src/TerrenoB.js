import React from "react";

const imagenes = require.context('./imagenes/');

const TerrenoB= () => (
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
    <img src={imagenes("./anuncios/terreno2.jpg")} alt=""/>
				<div class="detalles-content">
					<h1>Terreno, Monserrat</h1>
{/* 						<p class="price"><b>Precio: </b> $${producto.price}</p> */}
						<p class="description">
							<b>Descripcion: </b> <span>
                            Lotes de terreno con amplios frentes diseñados para unidades familiares amplias y seguras. Construye hasta dos pisos de altura ocupando el 25% del área del lote en planta baja y el 25% adicional en el segundo piso.
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
            <div class="grid-item">1.000m^2</div>
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

export default TerrenoB;