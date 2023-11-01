
import Home from './pages/Home'
import Card from './conponents/card/Card'
import Contador from './conponents/contador/Contador'
import Tarefa from './conponents/tarefa/Tarefa'

function App() {

  return (
    <>
    <Home/>
    <Card titulo='Pets da galera' descricao='Animais da familia generation, turma 67.'/>
    <Contador/>
    <Tarefa/>
    </>
  )
}

export default App
