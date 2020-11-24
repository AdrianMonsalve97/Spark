import React, { Component } from 'react'
import axios from 'axios'
export default class CrearAgentes extends Component {


    state = {
        Vias: [],
        ViasSelected: '',
        nombre: '',
        codigo: '',
        experiencia: '',
        codigot: '',
        Viasa: '',
        editing: false,
        _id: ''
    }

    async componentDidMount() {


        const res = await axios.get('http://localhost:4000/api/vias')

        this.setState({
            Vias: res.data.map(Vias => Vias.id),
            ViasSelected: res.data[1].Id
        })
        if (this.props.match.params.id) {
            const res = await axios.get('http://localhost:4000/api/agentes/' + this.props.match.params.id)

            this.setState({
                nombre: res.data.nombre,
                codigo: res.data.codigo,
                experiencia: res.data.experiencia,
                codigot: res.data.codigot,
                editing: true,
                _id: this.props.match.params.id
            })
        }


    }
    onSubmit = async (e) => {

        const newAgente = {
            nombre: this.state.nombre,
            codigo: this.state.codigo,
            experiencia: this.state.experiencia,
            codigot: this.state.codigot,
            Viasa: this.state.Vias

        };
        if (this.state.editing) {
            await axios.put('http://localhost:4000/api/agentes/' + this.state._id, newAgente)
        } else {
            await axios.post('http://localhost:4000/api/agentes', newAgente);
        }

        window.location.href = '/listA';


    }

    onInputchange = e => {


        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div className="col-md-6 offset-md-3">
                <div className="card card-body">
                    <h4>Crear Agente </h4>
                    {/**Select Agent */}
                    <select className="fomr-control"
                        name="ViasSelected"
                        onChange={this.onImputChange}
                        value={this.state.ViasSelected}>


                        {
                            this.state.Vias.map(Vias =>
                                <option key={Vias} value={Vias}>
                                    {Vias}
                                </option>
                            )


                        }
                    </select>
                    <div className="form-group">
                        <input type="text"
                            className="form-control"
                            placeholder="Nombre"
                            name="nombre"
                            onChange={this.onInputchange}
                            value={this.state.nombre}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input type="Number"
                            className="form-control"
                            placeholder="Codigo"
                            name="codigo"
                            onChange={this.onInputchange}
                            value={this.state.codigo}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input type="Number"
                            className="form-control"
                            placeholder="Experiencia En Años"
                            name="experiencia"
                            onChange={this.onInputchange}
                            value={this.state.experiencia}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input type="Number"
                            className="form-control"
                            placeholder="Codigo Transito"
                            name="codigot"
                            onChange={this.onInputchange}
                            value={this.state.codigot}
                            required
                        />
                    </div>
                    <div className="form group">


                    </div>

                </div>
                <form onSubmit={this.onSubmit}>

                    <button type="submit" className="btn btn-primary">
                        Guardar Agente
                        </button>
                </form>
            </div>

        )
    }


}

