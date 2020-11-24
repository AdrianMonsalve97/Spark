import React, { Component } from 'react'
import axios from 'axios'
import { format } from 'timeago.js'
import { Link } from 'react-router-dom'
import CrearVias from './CrearVias'
export default class ViasList extends Component {
    
    state = {

        vias: []


    }
    componentDidMount() {
        this.getVias();
    }
    async getVias() {
        const res = await axios.get('http://localhost:4000/api/vias/')
        this.setState({ vias: res.data })
    }

    daleteVias = async (id) => {
        await axios.delete('http://localhost:4000/api/vias/' + id)
        this.getVias();

    }
    render() {
        return (
            <div className="row">
                {
                    this.state.vias.map(Vias => (
                        <div className="col-md-4 p-2 " key={Vias._id}>
                            <div className="card">
                                <div className="card-header d-flex justify-content-between">
                                    <h5>{Vias.id}</h5>
                                    <Link className="btn btn-secondary" to={"/createV" + Vias._id} >
                                        Editar
                                </Link>
                                </div>
                                <div className="card-body ">
                                    <p>
                                        {Vias.id}  Id via
                                        </p>
                                    <p>
                                        {Vias.tipo} Tipo 
                                </p>
                                    <p>
                                        {Vias. cllokr} Via secundaria
                                </p>
                                    <p>{CrearVias.numero} Numero Via Sdo
                                </p>
                            
                                    <p>{Vias.congestion} Congestion Via
                                </p>
                                    <p>
                                        {format(Vias.date)}
                                    </p>
                                </div>
                                <div className="card-footer">
                                    <button className="btn btn-danger" onClick={() => this.daleteVias(Vias._id)}>
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
