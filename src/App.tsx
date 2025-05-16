import { useState } from 'react'
import reactLogo from './assets/react.svg'

import { Login } from './assets/pages/login'
import { RegistarPassword } from './assets/pages/registarPassword'


export const App=()=> {

  return (
    <>
      <div>
        <Login/>
        <RegistarPassword/>
      </div>
    </>
  )
}


