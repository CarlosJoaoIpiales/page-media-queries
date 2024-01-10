import React from "react";
class Listar extends React.Component {
    constructor(props) {
        super(props);
        this.state={}
    }
    state = {  }
    render() { 
        return (<table class="table">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Sector</th>
                    <th>Costo</th>
                    <th>Encargado</th>
                    <th>Tipo de Inmueble</th>
                    <th>Fecha de Ingreso</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td scope="row">CAsa1</td>
                    <td>Quito</td>
                    <td>10</td>
                    <td>Jose</td>
                    <td>Casa</td>
                    <td>1/enero</td>

                </tr>

            </tbody>
        </table>);
    }
}
 
export default Listar;