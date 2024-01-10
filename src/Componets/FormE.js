import React from "react";

const FormE = ({inmueble, setInmueble}) => {
    const handleChange = e => {
        setInmueble({
            ...inmueble,
            [e.target.name]: e.target.value
        })
    }

    let{ubicacion, sector, extension, costo, encargado, fechaDisponibilidad, tipo} = inmueble

    const handleSubmit = () => {
        extension = parseInt(extension, 100)
        costo = parseInt(costo, 100)
        //validación de los datos
        // if (ubicacion === '' || sector === '' || extension <= 0 || costo <= 0 || 
        // encargado === '' || fechaDisponibilidad === '' || tipo ==='') {
        //     alert('Todos los campos son obligatorios')
        //     return
        // }
        //consulta
        const requestInit = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(inmueble)
                }
                fetch('http://localhost:9000/api', requestInit)
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
}


    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="ubicacion" className="form-label" >Ubicacion</label>
                <input value={ubicacion} name="ubicacion" onChange={handleChange} type="text" id="ubicacion" className="form-control"></input>
            </div>

            <div className="mb-3">
                <label htmlFor="sector" className="form-label" >Sector</label>
                <input value={sector} name="sector" onChange={handleChange} type="text" id="sector" className="form-control"></input>
            </div>

            <div className="mb-3">
                <label htmlFor="extension" className="form-label" >Extension</label>
                <input value={extension} name="extension" onChange={handleChange} type="number" id="extension" className="form-control"></input>
            </div>

            <div className="mb-3">
                <label htmlFor="costo" className="form-label" >Costo</label>
                <input value={costo} name="costo" onChange={handleChange} type="number" id="costo" className="form-control"></input>
            </div>

            <div className="mb-3">
                <label htmlFor="encargado" className="form-label" >Encargado</label>
                <input value={encargado} name="encargado" onChange={handleChange} type="text" id="encargado" className="form-control"></input>
            </div>

            <div className="mb-3">
                <label htmlFor="fechaDisponibilidad" className="form-label" >Fecha de Ingreso</label>
                <input value={fechaDisponibilidad} name="fechaDisponibilidad" onChange={handleChange} type="date" id="fechaDisponibilidad" className="form-control"></input>
            </div>

            <br></br>
            <div className="mb-3">
                <label htmlFor="tipo" className="form-label" >Tipo de Vivienda</label>
                <br></br>
                <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example" onChange={handleChange} name="tipo" id="tipo" value={tipo}>
                    <option selected>Elija una opcion</option>
                    <option>Casa</option>
                    <option>Edificio</option>
                    <option>Terreno</option>
                    <option>Hacienda</option>
                </select>

            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </div>

            {/* <div className="mb-3">
                <label htmlFor="tipo" className="form-label" >Tipo de Inmueble</label>
                <input value={tipo} name="tipo" onChange={handleChange} type="text" id="tipo" className="form-control"></input>
            </div> */}



        </form>
        
     );
}
 
export default FormE;