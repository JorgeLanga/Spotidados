import React, { useState } from 'react'
import logo from '../img/logo.png';
import { NavLink } from 'react-router-dom';


export const Login=()=>{
    const inputStyle='bg-white text-black opacity-70% border-1 rounded mx-4 mb-4 py-2 w-70 text-center'
    const [username, setUserName] = useState ("")
    const [senha, setSenha] = useState ("")

    return(
    <>
    <div className='bg-linear-to-t bg-red-500 to-black flex justify-center items-center h-screen' >
     <main>
         <form action="" className='w-50% h-50%'>
            <img src={logo} alt="" className="w-80 h-85 py-0 my-0 "/>
            <input type="text" placeholder='Username' id="" value={username} onChange={(ev) => setUserName (ev.target.value )} className={inputStyle}/>
            <br /> 
            <input type="password"placeholder='Palavra-passe' id="" value={senha} onChange={(ev) => setSenha (ev.target.value )} className={inputStyle} />
            <br /> 
            <NavLink to = {'/listarUsuarios'}>
                <button type='submit' className=' rounded text-white px-3 py-2 m-4 w-70 bg-red-950' >Entrar</button>
            </NavLink>
         </form>
     </main>
    </div>
    </>
    
    )
}