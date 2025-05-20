import React from 'react'
import logo from '../img/logo.png';
import { NavLink } from 'react-router-dom';

export const RegistarPassword = () => {
const inputStyle='bg-white text-black opacity-70% border-1 rounded mx-4 mb-4 py-2 w-70 text-center'
  return (
    <>
    <div className='bg-red-950 flex justify-center items-center h-screen ' >
      <main>
      <form action="" className='w-50% h-50%'>
        <img src={logo} alt="" className="w-80 h-85 p-0 m-0 "/>
        <input type="text" placeholder='Username' className={inputStyle}/><br /> 
        <input type="password" placeholder='Palavra-passe'className={inputStyle} /><br />
        <input type="password" placeholder='Confirmar Palavra-passe' className={inputStyle} />
        <br />
        <NavLink to={'/login'}>
        <button type='submit' className=' rounded text-white px-3 py-2 m-4 w-70 bg-red-600  '>Enviar</button>
        </NavLink>
      </form>
      </main>
    </div>
    </>
  
  )
}

