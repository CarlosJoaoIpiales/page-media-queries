import React from "react";

const ClienteList = ({cliente,setCliente,clientes,setListUpdated}) => {

    //Borrar Inmueble
    const handleDelete = idclientes => {
        const requestInit = {
            method: 'DELETE'
        }
        fetch('http://localhost:9001/clientes/' + idclientes, requestInit)
        .then(res => res.text())
        .then(res => console.log(res))

        setListUpdated(true)
    }

    let{nombre,apellido,telefono,correo,mensaje,asesor}=cliente

    const handleUpdate = idclientes => {
        telefono = parseInt(telefono, 100)
        //validación de los datos
        if (nombre === '' || apellido === '' || telefono <= 0 || 
        correo === '' || mensaje === '' || asesor ==='') {
            alert('Todos los campos son obligatorios')
            return
        }
        const requestInit = {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(cliente)
        }
        fetch('http://localhost:9001/clientes/' + idclientes, requestInit)
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

        setListUpdated(true)
    }




    return ( 
        
        


        <table className="table">
        <thead>
            <tr>
                <th>ID</th>
                <th>Ubicaion</th>
                <th>Sector</th>
                <th>Extension</th>
                <th>Costo</th>
                <th>Encargado</th>
                <th>Fecha</th>
                <th>Tipo</th>
            </tr>
        </thead>
        <tbody>
            {clientes.map(cliente=>(
            <tr key={cliente.idclientes}>
                <td>{cliente.idclientes}</td>
                <td>{cliente.nombre}</td>
                <td>{cliente.apellido}</td>
                <td>{cliente.telefono}</td>
                <td>{cliente.correo}</td>
                <td>{cliente.mensaje}</td>
                <td>{cliente.asesor}</td>
                <td>
                <div className="mb-3">
                    <button onClick={() => handleDelete(cliente.idclientes)} className="btn btn-danger">Eliminar</button>
                </div> 
                <div className="mb-3">
                    <button onClick={() => handleUpdate(cliente.idclientes)} className="btn btn-dark">Editar</button>
                </div>                  
                </td>
        </tr>


    ))}

        </tbody>
    </table>
     );
}
 
export default ClienteList;