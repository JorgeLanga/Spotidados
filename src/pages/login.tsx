import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import logo from '../img/logo.png';
import { usersData } from '../data/data';


export const Login=()=>{
    const inputStyle='bg-white text-black opacity-70% border-1 rounded mx-4 mb-4 py-2 w-70 text-center'
  
     const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  const navigate = useNavigate();

  const handleLogin = () => {
    setErro("");

    if (!email || !senha) {
      setErro("Preencha todos os campos.");
      return;
    }

     const user = usersData.find(
      (u) => u.email === email && u.password === senha
    );

    if (user) {
      localStorage.setItem("usuarioLogado", JSON.stringify(user));
      navigate("/lista");
    } else {
      setErro("Email ou senha incorretos.");
    }
  };


    return(
    <>
    <div className='bg-linear-to-t bg-red-500 to-black flex justify-center items-center h-screen' >
     <main>
         <form action="" className='w-50% h-50%'>
            <img src={logo} alt="" className="w-80 h-85 py-0 my-0 "/>
            <input type="text" value={email}
        onChange={(e) => setEmail(e.target.value)} placeholder='Email' id=""  className={inputStyle}/>
            <br /> 
            <input type="password"placeholder='Palavra-passe' id="" value={senha}
        onChange={(e) => setSenha(e.target.value)} className={inputStyle} />
            <br /> 
          
                <button type='submit' onClick={handleLogin} className=' rounded text-white px-3 py-2 m-4 w-70 bg-red-950' >Entrar</button>
                 {erro && <p className="text-white mt-3 text-sm text-center">{erro}</p>}
          
         </form>
     </main>
    </div>
    </>
    
    )
}