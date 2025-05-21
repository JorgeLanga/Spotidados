

import { useEffect, useState } from "react";
import { Footer } from "../components/footer";
import type { userProps } from "../types/users";
import { usersData } from "../data/data";
import { UserIcon } from "@phosphor-icons/react";
import { NavLink } from 'react-router-dom';

export const ListarUsuarios = () => {
  const [users, setUsers] = useState<userProps[]>([]);


 useEffect(() => {
    getUsers()
 })


   function getUsers() {
        setUsers(usersData)
    }
                
     

  return (
    <body className="">
      <div >
        <button
        
          className=" bg-red-700 cursor-pointer text-white px-4 py-2 rounded-md w-screen h-10"
        >
          Usuarios
        </button>
        <div>
          {users.map((item) => (
            <div className="flex justify-center " >
              <NavLink to={`/dadosUsuario/${item.id}`} >
                <p className="bg-black opacity-65 text-white flex  pr-0 px-20 py-4 my-5 w-80 h-20 rounded"><span className="mx-5 text-red-700"><UserIcon size={25} weight="fill" /> </span> {item.name}<span className=""></span></p>
              </NavLink>
              
            </div>
          ))}
        </div>
      </div>


      <Footer />
    </body>
  );
};

