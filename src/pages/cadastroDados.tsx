import React from 'react'
import logo from '../imagens/logo.png';

export const CadastroDados = () => {
  const inputStyle='bg-white text-black opacity-70% border-1 rounded mx-4 mb-4 py-2 w-70 text-center'
  return (
   <body className='bg-red-950  ' >
    <div className='flex justify-center items-center h-screen ' >
      
      <form action="" className='w-50% h-50%'>
        <img src={logo} alt="" className="w-80 h-85 p-0 m-0 "/>
        <input type="email" placeholder='Email' className={inputStyle}/><br /> 
        <input type="date" className={inputStyle} /><br />
        <select name="" id="" className={inputStyle}>
           <option value="" disabled selected className='bg-red-200'>Selecione Genero</option>
          <option value="male" className='bg-red-200'>Masculino</option>
          <option value="female" className='bg-red-200'>Feminino</option>
        </select><br />
        <button type='submit' className=' rounded text-white px-3 py-2 m-4 w-70 bg-red-600  '>Submeter</button>
      </form>
    </div>
    
  </body>
  )
}


