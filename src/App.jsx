import React, { useState } from 'react';
import SingleColor from './SingleColor';
//biblioteca de cores
import Values from 'values.js';


function App() {
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values('#993399').all(10))
  
  //prevenir possiveis erros ao enviar dados
  const handleSubmit = (e) =>{
    e.preventDefault()
    try {
      let colors = new Values(color).all(10)
      setList(colors)
    } catch (error) {
      setError(true)
      console.log(error);
    }
  }

  return (
    <>
      <section className='container'>
        <h3>Gerador de paleta de cor</h3>

        <form onSubmit={handleSubmit}>
          <input type='text' value={color} onChange={(e) => setColor(e.target.value)} placeholder='#FFFFFF'className={`${error? 'error': null}`} />
          <button className='btn' type='submit'>
            Gerar
          </button>
        </form>
      </section>

      <section className='colors'>
          {list.map((color, index) =>{
            return <SingleColor key={index} {...color} index={index} hexColor={color.hex}/>
          })}
      </section>
    </>
  )
}

export default App
