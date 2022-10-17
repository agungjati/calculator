import { useState } from 'react';
import './App.css';
import { generateBilanganGanjilApi, generateBilanganPrimaApi, generateSegitigaApi } from './services/api';

const initialState = {
  segitiga: '',
  bilanganGanjil: '',
  bilanganPrima: ''
}

function App() {
  const [ result, setResult ] = useState(initialState)
  const [ inputNumber, setInputNumber ] = useState(0)

  const generateBilanganGanjil = () => {
    if(isNaN(Number(inputNumber))) {
      alert('harus input angka')
      return
    }
    generateBilanganGanjilApi(inputNumber)
    .then(res => {
      setResult({
        ...initialState,
        bilanganGanjil: res.bilanganGanjil
      })
    })
  }

  const generateBilanganPrima = () => {
    if(isNaN(Number(inputNumber))) {
      alert('harus input angka')
      return
    }

    generateBilanganPrimaApi(inputNumber)
    .then(res => {
      setResult({
        ...initialState,
        bilanganPrima: res.bilanganPrima
      })
    })
  }

  const generateSegitiga = () => {
    if(isNaN(Number(inputNumber))) {
      alert('harus input angka')
      return
    }
    
    generateSegitigaApi(inputNumber)
    .then(res => {
      setResult({
        ...initialState,
        segitiga: res.segitiga
      })
    })
  }

  return (
    <div className='container mt-5' >
      <form>
        <div className="mb-3">          
          <input type="text" className="form-control" placeholder='Input Angka' 
          value={inputNumber}
          onChange={(ev) => setInputNumber(ev.target.value) }           
          />
          <div id="emailHelp" className="form-text">fill this field with number</div>
        </div>
        <div>
          <button type="button" className="btn btn-primary me-2" onClick={generateSegitiga} >Generate Segitiga</button>
          <button type="button" className="btn btn-primary me-2" onClick={generateBilanganGanjil} >Generate Bilangan Ganjil</button>
          <button type="button" className="btn btn-primary" onClick={generateBilanganPrima} >Generate Bilangan Prima</button>
        </div>
      </form>
      <hr />
      <h4 className='mt-4'>Result</h4>
      <p>{ result.segitiga ? <span dangerouslySetInnerHTML={{ __html: result.segitiga }} ></span> : '' }</p>
      <p>{ result.bilanganGanjil ? result.bilanganGanjil : '' }</p>
      <p>{ result.bilanganPrima ? result.bilanganPrima : '' }</p>
    </div>
  );
}

export default App;
