
import { useState } from 'react';
import './App.css';
import Formulario from './components/Formulario';
import Lista from './components/Lista';

function App() {
  const [list, setList] = useState(
    [
      {
        title: 'Estudiar',
        description: 'Hacer tareas de CD',
        status: false,
        id: 1
      }
    ]
  )
  return (
    <div className="App">
      <Formulario list={list} setList={setList} />
      <Lista list={list} setList={setList} />
    </div>
  );
}

export default App;
