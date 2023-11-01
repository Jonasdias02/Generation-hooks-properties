

import Card from './components/card/Card'
import Contador from './components/contador/Contador'
import Tarefa from './components/tarefa/Tarefa'

function App() {

  return (
    <>
      <Card titulo='Pets da galera' descricao='Animais da familia generation, turma 67.'/>
        <Contador/>
      <Tarefa/>
    </>
  )
}

export default App
