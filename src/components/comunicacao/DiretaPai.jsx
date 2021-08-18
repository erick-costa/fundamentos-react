import React from 'react'
import DiretaFilho from './DiretaFilho'

const DiretaPai = props => {
    return (
        <div>
            <DiretaFilho nome='Junior' idade={20} nerd={true}></DiretaFilho>
            <DiretaFilho nome='Cleiton' idade={17} nerd={false}></DiretaFilho>
        </div>
    )
}

export default DiretaPai