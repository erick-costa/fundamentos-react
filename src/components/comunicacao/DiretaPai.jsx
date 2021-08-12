import React from 'react'
import DiretaFilho from './DiretaFilho'

const DiretaPai = props => {
    return (
        <div>
            <DiretaFilho nome='Junin' idade={20} nerd={true}></DiretaFilho>
            <DiretaFilho nome='Cleitin' idade={17} nerd={false}></DiretaFilho>
        </div>
    )
}

export default DiretaPai