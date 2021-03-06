import React, { Component } from 'react'

export default class ClaseDetail extends Component {
  constructor(props){
    super(props);

    this.state = {
      instancias: ['instancia 1', 'instancia2', 'instancia3'],
    };

  }

  renderInstancias() {
    return this.state.instancias.map((inst, i) =>
      <tr>
        <th scope="row">{i}</th>
        <td><a onClick={this.props.onChange.bind(this, inst)} href="#instanciaDetail">{inst}</a></td>
      </tr>
    );
  }

  render() {
    return (
      <div>
        <div className="container">
          <h3>Clase: {this.props.clase}</h3>
          <p>Cantidad de instancias: *</p>
          <p>Subclases</p>
          <p>Información de la clase</p>
        </div>
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Instancia</th>
            </tr>
          </thead>
          <tbody>
            {this.renderInstancias()}
          </tbody>
        </table>
      </div>
    )
  }
}
