import React, { Component } from 'react';

class Random extends Component{

    state = {
        texto: '',
        textoDos: ''
    }

    botonPrueba = () => {

        this.setState({
            texto: 'este es el nuevo estado',
            textoDos: 'este es el texto dos'
        })
    }

    render(){
        return (
            <div className="nuevoDiv">
                <p>Esto es desde random</p>
                <button type="button" onClick={this.botonPrueba}>Probando</button>
                <div>{this.state.texto}</div>
                <div>{this.state.textoDos}</div>
            </div>
        )
    }
}

export default Random;