import React from 'react'

const Aleatorio = props => {
    const { min, max } = props
    const form = parseInt(Math.random() * (max - min)) + min
    return (
        <p>Número Aleatório: <strong>
            {form}
        </strong> </p>
    )
}

export default Aleatorio