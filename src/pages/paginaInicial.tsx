//import React from 'react'
import logo from '../imagens/logo.png';


export const PaginaInicial=()=>{

    return(
         <body className='bg-red-950  ' >
    <div className='flex justify-center items-center h-screen ' >
      
      <form action="" className='w-50% h-50%'>
        <img src={logo} alt="" className="w-80 h-85 p-0 m-0 "/>
        
       <button type='submit' className=' text-center rounded text-white px-3 py-2 m-4 w-70 bg-red-600  '>Registar-se</button><br />
        <button type='submit' className='text-center rounded text-white px-3 py-2 m-4 w-70 bg-red-600  '>Iniciar sessao</button>
      </form>
    </div>
    
  </body>
    )
}