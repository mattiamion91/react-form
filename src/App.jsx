import './App.css'
import { useState } from 'react'

//array da usare come valore iniziale della var di stato dei dati
const initTitles = ['Vini dealcolati', 'I vini proibiti del Veneto', 'Tappo stevin o tappo in sughero?'];

function App() {

  //var di stato per gestire la lista titoli
  const [titles, setTitles] = useState(initTitles)

  return (
    <>
      <header>
        <h1>React Blog Form</h1>
      </header>
      <main className='container'>
        <ul className="list-group">
          {titles.map((title, i) => (
            <li className="list-group-item" key={i}>
              {title}
            </li>))}
        </ul>

        {/*form per aggiungere titolo alla lista*/}
        <form>
          <div className="input-group">
            <input 
            type="text" 
            className='form-control'
            placeholder='Aggiungi titolo'/>
          <button type= 'button' className='btn btn-primary'>Aggiungi</button>
          </div>
        </form>
      </main>
    </>

  )
}

export default App
