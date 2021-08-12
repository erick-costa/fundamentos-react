import './Contador.css'
import React, { Component } from 'react'

class Contador extends Component {

    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.passpInicial || 5
    }

    inc = () => { 
        this.setState({
            numero: this.state.numero + this.state.passo,
        });
    }

    dec = () => {
        this.setState({
            numero: this.state.numero - this.state.passo,
        });
    }

    setPasso = (event) => {
        this.setState({
            passo: +event.target.value,
        })
    }

    render() {
        return (
            <div className="Contador">
                <h3>{this.state.numero}</h3>
                <label htmlFor="passoInput">Passo:</label>
                <input type="number"
                    id="passoInput" 
                    value={this.state.passo}
                    onChange={this.setPasso}
                />
                <button onClick={this.inc}>+</button>
                <button onClick={this.dec}>-</button>
            </div>
        )
    }
}
export default Contador