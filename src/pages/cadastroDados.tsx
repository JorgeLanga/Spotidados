

import React from 'react'
import logo from '../img/logo.png';
import { NavLink } from 'react-router-dom';

export const CadastroDados = () => {
  const inputStyle='bg-white text-black opacity-70% border-1 rounded mx-4 mb-4 py-2 w-70 text-center'
  return (
    <>
    <div className='bg-linear-to-t bg-red-500 to-black flex justify-center items-center h-screen ' >
      <main>
      <form action="" className='w-50% h-50%'>
        <img src={logo} alt="" className="w-80 h-85 p-0 m-0 "/>
        <input type="email" placeholder='Email' className={inputStyle}/>
        <br/> 
        <input type="date" className={inputStyle} /><br />
        <select name="" id="" className={inputStyle}>
           <option value="" disabled selected className=' '>Selecione Genero</option>
           <option value="male" className='bg-gray-50'>Masculino</option>
           <option value="female" className='bg-gray-50'>Feminino</option>
        </select>
        <br/>
        <NavLink to={'/registarPassword'}>
        <button type='submit' className=' rounded text-white px-3 py-2 m-4 w-70 bg-red-950 '>Submeter</button>
        </NavLink>
      </form>
      </main>
    </div>
    </>
  )
}


