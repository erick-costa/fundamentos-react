import './App.css'
import React from 'react'

import Card from './components/layout/Card'

import IndiretaPai from './components/comunicacao/IndiretaPai.jsx'
import DiretaPai from './components/comunicacao/DiretaPai'
import UsuarioInfo from './components/condicional/UsuarioInfo'
import ParOuImpar from './components/condicional/ParOuImpar'
import ListaAlunos from './components/repeticao/ListaAlunos'
import FamiliaMembro from './components/basicos/FamiliaMembro'
import Familia from './components/basicos/Familia'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'
import TabelaProdutos from './components/repeticao/TabelaProdutos'
import Contador from './components/contador/Contador.jsx'

const App = _ => 
    <div className='App'>
        <h1>Fundamentos React</h1>

        <div className="Cards">
            <Card titulo='12 - Contador' color="#AF7AC5">
                <Contador numeroInicial={10}></Contador>
            </Card>

            <Card titulo='10 - Comunicação Indireta' color="#8BAD39">
                <IndiretaPai/>
            </Card>

            <Card titulo='09 - Comunicação Direta' color="#59323C">
                <DiretaPai/>
            </Card>

            <Card titulo='08 - Renderização Condicional' color="#982395">
                <ParOuImpar numero={21}></ParOuImpar>
                <UsuarioInfo usuario={{ nome: 'Fernando' }}/>
                {/* <UsuarioInfo usuario={{}}/>
                <UsuarioInfo /> */}
            </Card>

            <Card titulo='07 - Desafio Repetição' color="#CB4335">
                <TabelaProdutos></TabelaProdutos>
            </Card>
            <Card titulo='06 - Repetição' color="#F1C40F">
                <ListaAlunos></ListaAlunos>
            </Card>
            <Card titulo='05 - Componentes com Filhos' color="#2E4053">
                <Familia sobrenome='Costa'>
                    <FamiliaMembro nome='Pedro'/>
                    <FamiliaMembro nome='Ana'/>
                    <FamiliaMembro nome='Jack'/>
                </Familia>
            </Card>

            <Card titulo='04 - Desafio Aleatório' color="#35BF6F">
                <Aleatorio min={1} max={50} />
            </Card>

            <Card titulo='03 - Fragmento' color="#E74C3C">
                <Fragmento />
            </Card>

            <Card titulo='02 - Situação do Aluno' color="#8E44AD">
                <ComParametro
                    aluno="Pedroca"
                    nota={8.7}
                />
            </Card>

            <Card titulo='01 - Primeiro Componente' color="#2E86C1">
                <Primeiro></Primeiro>
            </Card>
        </div>
    </div>

export default App