import React, { Component } from 'react'
import axios from 'axios'
export default class CrearVias extends Component {
    state = {
        vias: [],
        id: '',
        tipo: '',
        cllokr: '',
        numero: '',
        congestion: ''

    }
    async componentDidMount() {
        this.getVias();

        console.log(this.state.vias)


    }
    getVias = async () => {
        const res = await axios.get('http://localhost:4000/api/Vias/');
        this.setState({ vias: res.data });
    }
    onChangeId = async e => {
        this.setState({
            id: e.target.value,
            tipo: e.target.value,
            cllokr: e.target.value,
            numero: e.target.value,
            congestion: e.target.value

        })


    }
    onSubmit = async e => {
        e.preventDefault();
        await axios.post('http://localhost:4000/api/Vias/', {
            id: this.state.id,
            tipo: this.state.tipo,
            cllokr: this.state.cllokr,
            numero: this.state.numero,
            congestion: this.state.congestion
        })
        this.setState({ id: '', tipo: '', cllokr: '', numero: '', congestion: '' });
        this.getVias();
    }
    deleteAgente = async id => {
        await axios.delete('http://localhost:4000/api/Vias/' + id);
        this.getVias()


    }

    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    <div className="card card-body">
                        <h3>Crear Nueva Via </h3>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <input type="Number"
                                    className="form-control"
                                    placeholder="Id Via"
                                    name="id"
                                    onChange={this.onChangeId}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input type="text"
                                    className="form-control"
                                    placeholder="Tipo"
                                    name="tipo"
                                    onChange={this.onChangeId}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input type="text"
                                    className="form-control"
                                    placeholder="Calle o Carrera?"
                                    name="cllokr"
                                   
                                    onChange={this.onChangeId}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input type="Number"
                                    className="form-control"
                                    placeholder="numero secundario"
                                    name="numero"
                                
                                    onChange={this.onChangeId}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input type="Number"
                                    className="form-control"
                                    placeholder="Nivel De Congestion"
                                    name="congestion"
                                  
                                    onChange={this.onChangeId}
                                    required
                                />
                            </div>
                            <button type="submit" className="btn btn-primary">Guardar</button>

                        </form>
                    </div>

                </div>
                <div className="col-md-8">
                    <ul className="list-group">
                        {
                            this.state.vias.map(vias => (
                                <li className="list-group-item list-group-item-action"
                                    key={vias._id}
                                    onDoubleClick={() => this.deleteAgente(vias._id)}
                                >
                                    <p>{vias.id}</p>
                                    <p>{vias.tipo}</p>
                                    <p>{vias.cllokr}</p>
                                    <p>{vias.numero}</p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
