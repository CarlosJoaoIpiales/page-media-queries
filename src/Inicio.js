import React from "react";

const imagenes = require.context('./imagenes/');

const Inicio = () => (
    <div class="Grupo2">
        <body>
        <header class="header1 inicio">
        <div id="cont-fondo">
            <div class="contenedor contenido-header">
                <div class="barra">
                    <a href="inicio">
                        <img src={imagenes("./Logo.png")} width="150" height="150"/>
                    </a>
    
                   
    
                    <div class="derecha">
                       
                        <i class="fa-solid fa-bars" id="btn_menu"></i>
                        <div id="back_menu"></div>
                        <nav class="navegacion" id="nav">
                            <img src={imagenes("./Logo.png")} width="150" height="150"/>

                            <a href="nosotros">Nosotros</a>
                            <a href="anuncios">Anuncios</a>
                           
                            <a href="contacto">Contacto</a>
                            <a href="login">Login</a>

                        </nav>
                    </div>
                    
                </div>                
            
                <h1>Venta de Casas y Departamentos  Exclusivos de Lujo</h1>
                
            </div>
        </div>

    </header>

    <main> 
        <h1>Más Sobre Nosotros</h1>

        <div class="iconos-nosotros">
            <div class="icono">
                <img src={imagenes("./icono1.svg")} alt="Icono seguridad" loading="lazy"/>
                <h3>Seguridad</h3>
                <p> Solo los mejores Profesionales 
                    Inmobiliarios del mercado acompañarán a 
                    nuestros usuarios desde el primer paso de búsqueda hasta la entrega de la propiedad.</p>
            </div>
            <div class="icono">
                <img src={imagenes("./icono2.svg")} alt="Icono Precio" loading="lazy"/>
                <h3>Precio</h3>
                <p>Ayudamos a nuestros clientes a encontrar un espacio que amen en la zona de mayor crecimiento inmobiliario y plusvalía de Quito. </p>
            </div>
            <div class="icono">
                <img src={imagenes("./icono3.svg")} alt="Icono Tiempo" loading="lazy"/>
                <h3>A Tiempo</h3>
                <p>En INMO.QUITO estamos convencidos de que el proceso de compra de una propiedad no debe ser largo y doloroso.</p>
            </div>
        </div>





        <h1>Ventas Destacables</h1>

        <div class="container-post">

            <div class="posts">
    
                <div class="post" data-category="CASAS">
                    <div class="ctn-img">
                        <img src={imagenes("./anuncios/casa1.jpg")} alt=""/>
                    </div>
                    <h2>Casa en venta sector Cumbaya</h2>
                    <span>400.000</span>
                    <ul class="ctn-tag">
                        <li>CASA</li>
                    </ul>
                    <a href="CasaA"><button>Leer más</button></a>
                </div>
    
                <div class="post" data-category="CASAS">
                    <div class="ctn-img">
                        <img src={imagenes("./anuncios/casa2.jpg")} alt=""/>
                    </div>
                    <h2>Casa en venta sector Tumbaco</h2>
                    <span>500.000</span>
                    <ul class="ctn-tag">
                        <li>CASA</li>
                    </ul>
                    <a href="CasaB"><button>Leer más</button></a>
                </div>
    
                <div class="post" data-category="DEPARTAMENTOS">
                    <div class="ctn-img">
                        <img src={imagenes("./anuncios/dep1.jpg")} alt=""/>
                    </div>
                    <h2>Departamento en venta sector La Carolina</h2>
                    <span>250.000</span>
                    <ul class="ctn-tag">
                        <li>DEPARTAMENTO</li>
                    </ul>
                    <a href="DepartamentoA"><button>Leer más</button></a>
                </div>
    
                <div class="post" data-category="DEPARTAMENTOS">
                    <div class="ctn-img">
                        <img src={imagenes("./anuncios/dep2.jpg")} alt=""/>
                    </div>
                    <h2>Departamento en venta sector Valle de los Chillos</h2>
                    <span>280.000</span>
                    <ul class="ctn-tag">
                        <li>DEPARTAMENTO</li>
                    </ul>
                    <a href="DepartamentoB"><button>Leer más</button></a>
                </div>
    
            </div>
        
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

export default Inicio;