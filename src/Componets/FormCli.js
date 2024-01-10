import React from "react";


const FormCli= ({cliente, setCliente})=> {


    const handleChange = e => {
        setCliente({
            ...cliente,
            [e.target.name]: e.target.value
        })
    }

    let{nombre,apellido,telefono,correo,mensaje,asesor}=cliente

        const handleSubmit = () => {
        telefono = parseInt(telefono, 100)
        //validación de los datos
        if (nombre === '' || apellido === '' || telefono <= 0 || 
        correo === '' || mensaje === '' || asesor ==='') {
            alert('Todos los campos son obligatorios')
            return
        }
        //consulta
        const requestInit = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(cliente)
                }
                fetch('http://localhost:9001/clientes', requestInit)
                .then(res => res.text())
                .then(res => console.log(res))
        //reiniciando state de libro
        setCliente({
            nombre: '',
            apellido: '',
            telefono: 0,
            correo: '',
            mensaje: '',
            asesor: '' 
        })
}

    return (  
    <form className="formulario" onSubmit={handleSubmit}>
        <legend>CONTACTANOS LLENANDO TODOS LOS DATOS</legend>
        <div className="contenedor-campos">
                            <div className="campo">
                                <input value={nombre} name="nombre" onChange={handleChange} type="text"  id="nombre" className="form-input" placeholder="Nombre" />
                            </div>

                            <div className="campo">
                                 
                                <input value={apellido} name="apellido" onChange={handleChange} type="text" id="apellido" className="form-input" placeholder="Apellido" />
                            </div>
                            
                            <div className="campo">
                                
                                <input value={telefono} name="telefono" onChange={handleChange} type="number" className="form-input" placeholder="Teléfono" />
                            </div>

                            <div className="campo">
                                
                                <input value={correo} name="correo" onChange={handleChange} type="email"className="form-input" placeholder="Email"/>
                            </div>

                            <div className="campo">
                                <label htmlFor="asesor" className="asesor">Elije a tu asesor/ra:</label>
                                <select onChange={handleChange} name="asesor" id="asesor" value={asesor} className="asesor1" >
                                    <option value="Vanessa">Ricardo</option>
                                    <option value="Santiago">Carlos</option>
                                    <option value="Richard">Richard</option>
                                </select>
                            </div>
                            
                            <div className="campo">
                               
                                <textarea value={mensaje} name="mensaje" onChange={handleChange}  className="form-textarea" placeholder="Mensaje"></textarea>
                            </div>
                        </div> 
                
                        <div>
                            <input className="boton" type="submit" value="Enviar"/>
                        </div>            
                        
                </form>

    );
}

export default FormCli;