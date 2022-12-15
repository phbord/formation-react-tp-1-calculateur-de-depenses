import './App.css'
import Operations from './components/Operations'
import OperationsForm from './components/OperationsForm'
import Synthesis from './components/Synthesis'
import Total from './components/Total'

function App() {
  return (
    <div className="App">
      <div className="container py-3">
        <Total/>
        <Synthesis/>
        <Operations/>
        <OperationsForm/>
      </div>
    </div>
  )
}

export default App
