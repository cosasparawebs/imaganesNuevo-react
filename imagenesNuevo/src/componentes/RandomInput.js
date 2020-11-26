import React, { Component } from 'react';

class NuevoInput extends Component{

    state = {
        texto: '',
    }

    cambiarEstado = (e) => {
        this.setState({texto: e.target.value});
    }

    tomarDatos = (e) =>{
        e.preventDefault();
    }

    render(){
        return(
            <div>
                <form onSubmit={this.tomarDatos}>
                    <div>
                        <input type="text" placeholder="Nuevo Input" value={this.state.texto.value} onChange={this.cambiarEstado} />
                        <input type="submit" value="Submit"/>
                    </div>
                </form>

                <p>{this.state.texto}</p>
            </div>
        )
    }
}

export default NuevoInput;