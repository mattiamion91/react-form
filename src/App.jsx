import './App.css'
import { useState } from 'react'

//array da usare come valore iniziale della var di stato dei dati
const initTitles = ['Vini dealcolati', 'I vini proibiti del Veneto', 'Tappo stevin o tappo in sughero?'];

function App() {

  //var di stato per gestire la lista titoli
  const [titles, setTitles] = useState(initTitles)
  //var di stato che gestisce valore input
  const [newTitle, setNewTitle] = useState('')
  //funzione gestione cambio var
  function handleChange(e) {
    setNewTitle(e.target.value)
  }
  //funzione gestione inzio form
  function addTitle(e) {
    //blocco il comportamento default del form
    e.preventDefault();
    //creo un nuovo array con gli elementi di quello di partenza + il nuovo input usando lo "spread operator"
    const updatedTitles = [...titles, newTitle];
    //cambio il valore della var di stato con array appena creato
    setTitles(updatedTitles);
    //ripulico il value dell'input
    setNewTitle('');
  }

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
        <form onSubmit={addTitle}>
          <div className="input-group">
            <input
              type="text"
              className='form-control'
              placeholder='Aggiungi titolo'
              value={newTitle}
              onChange={handleChange} />
            <button type='submit' className='btn btn-primary'>Aggiungi</button>
          </div>
        </form>
      </main>
    </>

  )
}

export default App
