
import React from 'react'
import logo from '../img/logo.png';

import { NavLink } from 'react-router-dom';



export const PaginaInicial=()=>{

    return(
         <body className='bg-linear-to-t bg-red-500 to-black  ' >
    <div className='flex justify-center items-center h-screen ' >
      
      <form action="" className='w-50% h-50%'>
        <img src={logo} alt="" className="w-80 h-85 p-0 m-0 "/>
        <NavLink to={'/cadastro'}>
       <button type='submit' className=' text-center rounded text-black px-3 py-2 m-4 w-70 bg-white  '>Registar-se</button>
       </NavLink>
       <br />
       <NavLink to={'/login'}>
        <button type='submit' className='text-center rounded text-black px-3 py-2 m-4 w-70 bg-white  '>Iniciar sessao</button>
        </NavLink>
      </form>
    </div>
    
  </body>
    )
}