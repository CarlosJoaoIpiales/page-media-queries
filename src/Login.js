import React from "react";

const imagenes = require.context('./imagenes/');

const Login = () => (
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
                            <a href="AppL">Ing</a>
                            {/* <a href="log">Iniciado</a> */}
                            
                        </nav>
                    </div>
                </div>           
            </div>
        </div>
    </header>



    <main class="contenedor">
    
        <section class="fondo">
            <div class="cont-fondo">

                <h2>Iniciar Sesión</h2>
        
                <form class="formulario" action="formulario.php" method="post">
                    <fieldset>
                        
                        <legend>Llena tus Datos para iniciar</legend>

                        <div class="contenedor-campos">
                            <div class="campo">
                                
                                <input type="text" class="form-input" placeholder="Usuario" name="usuario"/>
                            </div>




                            <div class="campo">
                                
                                <input type="password"class="form-input" placeholder="Contraseña" name="contraseña"/>
                            </div>

                        </div> 
                
                        <div>
                            <a href="AppL">
                            <input class="boton"  value="Iniciar Sesión"/>

                            </a>
                            
                        </div>            
                        
                    </fieldset>
                </form>
            </div>
        </section>
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

export default Login;