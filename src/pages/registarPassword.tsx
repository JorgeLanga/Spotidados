import React from 'react'

export const RegistarPassword = () => {
  return (

      <body className='bg-'>
          <form action="">
        <label htmlFor="">Username</label><br />
        <input type="text" placeholder='Escreva o seu username' /><br />
        <label htmlFor="">Password</label><br />
        <input type="password" placeholder='Escreva a palavra-passe'  /><br />
         <label htmlFor="">Confirmar</label><br />
        <input type="password" placeholder='Escreva a mesma palavra-passe'  /><br />
        <button type='submit'>Enviar</button>
      </form>
      </body>
       
  
  )
}

