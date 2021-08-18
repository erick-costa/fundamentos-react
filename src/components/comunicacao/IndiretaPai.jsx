import React, { useState } from 'react'
import IndiretaFilho from './IndiretaFilho'

const DiretaPai = props => {
    const [nome, setNome] = useState('?')
    const [idade, setIdade] = useState(0)
    const [nerd, setNerd] = useState(false)

    // nome idade nerd
    const fornecerInformacoes = (nome, idade, nerd) => {
        setNome(nome)
        setIdade(idade)
        setNerd(nerd)
    }

    return (
        <div>
            <div>
                <span>{nome} <br/></span>
                <span>{idade} <br/></span>
                <span>{nerd ? 'Verdadeiro' : 'Falso'}</span>
            </div>
            <IndiretaFilho quandoClicar={fornecerInformacoes}></IndiretaFilho>
        </div>
    )
}

export default DiretaPai