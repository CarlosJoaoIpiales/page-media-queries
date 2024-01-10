import React from "react";

const InmuebleList = ({inmueble,setInmueble,inmuebles,setListUpdated}) => {

    //Borrar Inmueble
    const handleDelete = idinmubles => {
        const requestInit = {
            method: 'DELETE'
        }
        fetch('http://localhost:9000/api/' + idinmubles, requestInit)
        .then(res => res.text())
        .then(res => console.log(res))

        setListUpdated(true)
    }

    let{ubicacion,sector,extension,costo,encargado,fechaDisponibilidad,tipo}=inmueble

    const handleUpdate = idinmubles => {
        extension = parseInt(extension, 100)
        costo = parseInt(costo, 100)
        //validación de los datos
        if (ubicacion === '' || sector === '' || extension <= 0 || costo <= 0 || 
        encargado === '' || fechaDisponibilidad === '' || tipo ==='') {
            alert('Todos los campos son obligatorios')
            return
        }
        const requestInit = {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(inmueble)
        }
        fetch('http://localhost:9000/api/' + idinmubles, requestInit)
        .then(res => res.text())
        .then(res => console.log(res))

        //reiniciando state de libro
        setInmueble({
            ubicacion: '',
            sector: '',
            extension: 0,
            costo: 0,
            encargado: '',
            fechaDisponibilidad: '' 
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
            {inmuebles.map(inmueble=>(
            <tr key={inmueble.idinmubles}>
                <td>{inmueble.idinmubles}</td>
                <td>{inmueble.ubicacion}</td>
                <td>{inmueble.sector}</td>
                <td>{inmueble.extension}</td>
                <td>{inmueble.costo}</td>
                <td>{inmueble.encargado}</td>
                <td>{inmueble.fechaDisponibilidad}</td>
                <td>{inmueble.tipo}</td>
                <td>
                <div className="mb-3">
                    <button onClick={() => handleDelete(inmueble.idinmubles)} className="btn btn-danger">Eliminar</button>
                </div>                  
                </td>
        </tr>


    ))}

        </tbody>
    </table>
     );
}
 
export default InmuebleList;