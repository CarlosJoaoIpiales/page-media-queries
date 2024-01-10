import React from "react";

const imagenes = require.context('./imagenes/');

const Anuncios = () => (
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

    <main>
    </main>


    <div class="container-post">

        <input type="radio" id="TODOS" name="catergories" value="TODOS" checked/> 
        <input type="radio" id="CASAS" name="catergories" value="CASAS"checked/> 
        <input type="radio" id="DEPARTAMENTOS" name="catergories" value="DEPARTAMENTOS"checked/> 
        <input type="radio" id="SUITS" name="catergories" value="SUITS"checked/> 
        <input type="radio" id="TERRENOS" name="catergories" value="TERRENOS"checked/> 
        <input type="radio" id="PENTHOUSE" name="catergories" value="PENTHOUSE"checked/> 
        <input type="radio" id="HACIENDAS" name="catergories" value="HACIENDAS"checked/> 

        <div class="container-category">
            <label for="TODOS">TODOS</label>
            <label for="CASAS">CASAS</label>
            <label for="DEPARTAMENTOS">DEPARTAMENTOS</label>
            <label for="SUITS">SUITS</label>
            <label for="TERRENOS">TERRENOS</label>
            <label for="PENTHOUSE">PENTHOUSE</label>
            <label for="HACIENDAS">HACIENDAS</label> 
        </div>

        <div class="posts">

            <div class="post" data-category="CASAS">
                <div class="ctn-img">
                    <img src={imagenes("./anuncios/casa1.jpg")} alt=""/>
                </div>
                <h2>Casa en venta sector de Cumbaya</h2>
                <span>250.000 USD</span>
                <ul class="ctn-tag">
                    <li>CASA</li>
                </ul>
                <a href="CasaA"><button>Leer más</button></a>
            </div>

            <div class="post" data-category="CASAS">
                <div class="ctn-img">
                    <img src={imagenes("./anuncios/casa2.jpg")} alt=""/>
                </div>
                <h2>Casa en venta sector de Tumbaco</h2>
                <span>450.000 USD</span>
                <ul class="ctn-tag">
                    <li>CASA</li>
                </ul>
                <a href="CasaB"><button>Leer más</button></a>
            </div>

            <div class="post" data-category="CASAS">
                <div class="ctn-img">
                    <img src={imagenes("./anuncios/casa3.jpg")} alt=""/>
                </div>
                <h2>Casa en venta sector de La Armenia</h2>
                <span>600.000</span>
                <ul class="ctn-tag">
                    <li>CASA</li>
                </ul>
                <a href="CasaC"><button>Leer más</button></a>
            </div>

            <div class="post" data-category="DEPARTAMENTOS">
                <div class="ctn-img">
                    <img src={imagenes("./anuncios/dep1.jpg")} alt=""/>
                </div>
                <h2>Departamento en venta sector Mariscal Sucre</h2>
                <span>175.000</span>
                <ul class="ctn-tag">
                    <li>DEPARTAMENTO</li>
                </ul>
                <a href="DepartamentoA"><button>Leer más</button></a>
            </div>
            
            <div class="post" data-category="DEPARTAMENTOS">
                <div class="ctn-img">
                    <img src={imagenes("./anuncios/dep2.jpg")} alt=""/>
                </div>
                <h2>Departamento en venta sector de La Carolina</h2>
                <span>230.000</span>
                <ul class="ctn-tag">
                    <li>DEPARTAMENTO</li>
                </ul>
                <a href="DepartamentoB"><button>Leer más</button></a>
            </div>

            <div class="post" data-category="PENTHOUSE">
                <div class="ctn-img">
                    <img src={imagenes("./anuncios/pent1.jpg")} alt=""/>
                </div>
                <h2>Penthouse en venta Avenida Brasil</h2>
                <span>250.000</span>
                <ul class="ctn-tag">
                    <li>PENTHOUSE</li>
                </ul>
                <a href="PenthouseA"><button>Leer más</button></a>
            </div>

            <div class="post" data-category="PENTHOUSE">
                <div class="ctn-img">
                    <img src={imagenes("./anuncios/pent2.jpg")} alt=""/>
                </div>
                <h2>Penthouse en venta sector de Ponceano</h2>
                <span>300.000</span>
                <ul class="ctn-tag">
                    <li>PENTHOUSE</li>
                </ul>
                <a href="PenthouseB"><button>Leer más</button></a>
            </div>

            <div class="post" data-category="SUITS">
                <div class="ctn-img">
                    <img src={imagenes("./anuncios/suit1.jpg")} alt=""/>
                </div>
                <h2>Suite en venta sector La Carolina</h2>
                <span>380.000</span>
                <ul class="ctn-tag">
                    <li>SUIT</li>
                </ul>
                <a href="SuitA"><button>Leer más</button></a>
            </div>

            <div class="post" data-category="SUITS">
                <div class="ctn-img">
                    <img src={imagenes("./anuncios/suit2.jpg")} alt=""/>
                </div>
                <h2>Suite en venta sector de Tumbaco</h2>
                <span>385.000</span>
                <ul class="ctn-tag">
                    <li>SUIT</li>
                </ul>
                <a href="SuitB"><button>Leer más</button></a>
            </div>

            <div class="post" data-category="TERRENOS">
                <div class="ctn-img">
                    <img src={imagenes("./anuncios/terreno1.jpg")} alt=""/>
                </div>
                <h2>Terreno en venta en Luis Cordero sector Tumbaco</h2>
                <span>100.000</span>
                <ul class="ctn-tag">
                    <li>TERRENO</li>
                </ul>
                <a href="TerrenoA"><button>Leer más</button></a>
            </div>

            <div class="post" data-category="TERRENOS">
                <div class="ctn-img">
                    <img src={imagenes("./anuncios/terreno2.jpg")} alt=""/>
                </div>
                <h2>Terreno en venta Monserrat Bajo sector Conocoto</h2>
                <span>48.000</span>
                <ul class="ctn-tag">
                    <li>TERRENO</li>
                </ul>
                <a href="TerrenoB"><button>Leer más</button></a>
            </div>

            <div class="post" data-category="TERRENOS">
                <div class="ctn-img">
                    <img src={imagenes("./anuncios/terreno3.jpg")} alt=""/>
                </div>
                <h2>Terreno en venta en Marianas, Sector Carapungo </h2>
                <span>85.000</span>
                <ul class="ctn-tag">
                    <li>TERRENO</li>
                </ul>
                <a href="TerrenoC"><button>Leer más</button></a>
                </div>
            <div class="post" data-category="HACIENDAS">
                <div class="ctn-img">
                    <img src={imagenes("./anuncios/hacienda1.jpg")} alt=""/>
                </div>
                <h2>Hacienda, Nayon</h2>
                <span>250.000 USD</span>
                <ul class="ctn-tag">
                    <li>HACIENDAS</li>
                </ul>
                <a href="HaciendaA"><button>Leer más</button></a>
            </div>
            <div class="post" data-category="HACIENDAS">
                <div class="ctn-img">
                    <img src={imagenes("./anuncios/hacienda2.jpg")} alt=""/>
                </div>
                <h2>Hacienda, Cumbaya</h2>
                <span>250.000 USD</span>
                <ul class="ctn-tag">
                    <li>HACIENDAS</li>
                </ul>
                <a href="HaciendaB"><button>Leer más</button></a>
            </div>
            <div class="post" data-category="HACIENDAS">
                <div class="ctn-img">
                    <img src={imagenes("./anuncios/hacienda3.jpg")} alt=""/>
                </div>
                <h2>Hacienda, Tumbaco</h2>
                <span>250.000 USD</span>
                <ul class="ctn-tag">
                    <li>HACIENDAS</li>
                </ul>
                <a href="HaciendaC"><button>Leer más</button></a>
            </div>
            <div class="post" data-category="HACIENDAS">
                <div class="ctn-img">
                    <img src={imagenes("./anuncios/hacienda4.jpg")} alt=""/>
                </div>
                <h2>Hacienda, Santo Domingo</h2>
                <span>250.000 USD</span>
                <ul class="ctn-tag">
                    <li>HACIENDAS</li>
                </ul>
                <a href="HaciendaD"><button>Leer más</button></a>
            </div>

        </div>
    </div>

    <footer class="pie-pagina">
        <div class="grupo-1">
            <div class="box">
                <figure>
                    <a href="/inicio">
                        <img src={imagenes("./Logo.png")}width="150" height="150" alt="Logo Inmo.Quito"/>
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

export default Anuncios;