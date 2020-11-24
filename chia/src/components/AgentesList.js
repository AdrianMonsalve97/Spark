import React, { Component } from 'react'
import axios from 'axios'
import { format } from 'timeago.js'
import { Link } from 'react-router-dom'
export default class AgentesList extends Component {

    state = {

        agentes: []


    }
    componentDidMount() {
        this.getAgentes();
    }
    async getAgentes() {
        const res = await axios.get('http://localhost:4000/api/agentes')
        this.setState({ agentes: res.data })
    }

    daleteAgente = async (id) => {
        await axios.delete('http://localhost:4000/api/agentes/' + id)
        this.getAgentes();

    }
    render() {
        return (
            <div className="row">
                {
                    this.state.agentes.map(agentes => (
                        <div className="col-md-4 p-2 " key={agentes._id}>
                            <div className="card">
                                <div className="card-header d-flex justify-content-between">
                                    <h5>{agentes.nombre}</h5>
                                    <Link className="btn btn-secondary" to={"/edit/" + agentes._id} >
                                        Editar
                                </Link>
                                </div>
                                <div className="card-body ">
                                    <p>
                                        {agentes.Viasa}  Via Asignada
                                        </p>
                                    <p>
                                        {agentes.codigo} Codigo Agente
                                </p>
                                    <p>
                                        {agentes.experiencia} Años De Experiencia
                                </p>
                                    <p>
                                        {agentes.codigot} Codigo Transito
                                </p>




                                    <p>
                                        {format(agentes.date)}
                                    </p>
                                </div>
                                <div className="card-footer">
                                    <button className="btn btn-danger" onClick={() => this.daleteAgente(agentes._id)}>
                                        Eliminar

                                    </button>

                                </div>
                            </div>

                        </div>
                    )
                    )
                }
            </div>
        )
    }
}
