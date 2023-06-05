import React, { useState, useEffect } from 'react'

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false)
  //pega os valores em rgb
  const bcg = rgb.join(',')
  const hexValue = `#${hexColor}`
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false)
    }, 3000)
    return () => clearTimeout(timeout)
  }, [alert])
  return (
    //mostra o quadrado com a cor
    <article
      className={`color ${index > 10 && 'color-light'}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={() => {
        setAlert(true)
        navigator.clipboard.writeText(hexValue)
      }}
    >
    
    {/* mostra a porcentagem da intencidade da cor */}
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>{hexValue}</p>
      {/* para copiar a porcentagem da cor */}
      {alert && <p className='alert'>codigo da cor copiado!</p>}
    </article>
  )
}

export default SingleColor