import './App.css';
import React, { useState, useEffect } from 'react';
import {fetchTasks} from './api'



function App() {



  const [value, setValue] = useState("")
  const [tasks, setTasks] = useState([])
  console.log(tasks);

  useEffect(()=> {
    fetchTasks()
    .then((res)=>{
      console.log('Primer carga')
      setTasks(res.data)
      console.log(res.data)
    })
    .catch(()=> {
      console.error(err)
    })
  }, [])

  const addTask = () => {
    console.log('Agrega la tarea', value)
    setTasks(tasks.concat({
      _id: "62314c0c96b0e5d98024cffe" + Math.floor(math.random()*10),
      text: value
    }))
  }

  return (
    <div className="app">
      <header className="app-header">
        <div className="task-input__container">
          <div className="task-input">
            <input 
              type="text" 
              className="task-input__text"
              value={value}
              placeholder= "Ingresa la tarea"
              onChange={(e) => {
                setValue(e.target.value);
              }}    
            />
          </div>
          <button 
            onClick={() => console.log('Agregar tarea')} 
            className="task-input__btn"
          >
            Ingresar Tarea
          </button>
        </div>

        {tasks.map((task) => {
          return (
            <div className="task">
              <p>{tasks.text}</p>
            </div>
          )
        })}

      </header>
    </div>
  );
}

export default App;
