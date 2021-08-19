import './Input.css'
import React, { useState } from 'react'

const Input = props => {

    const [valor, setValor] = useState('Inicial')

    const quandoMudar = e => {
        setValor(e.target.value)
    }

    return (
        <div className='Input'>
            <h2>{valor}</h2>
            <div style={{
                display: 'flex',
                flexDirection: 'column'
            }}>
                <input type="text" value={valor} onChange={quandoMudar}/>
                <input type="text" value={valor} readOnly/>
                <input type="text" value={undefined}/>
            </div>
        </div>
    )
}

export default Input