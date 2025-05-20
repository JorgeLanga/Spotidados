
import { useEffect, useState } from "react";
import { Footer } from "../components/footer";
import type { userProps } from "../types/users";
import { usersData } from "../data/data";
import { UserIcon } from "@phosphor-icons/react";

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
      <div>
        <button
          onClick={getUsers}
          className=" bg-red-700 cursor-pointer text-white px-4 py-2 rounded-md w-40 h-10"
        >
          Usuarios
        </button>
        <div>
          {users.map((item) => (
            <div className="flex justify-center">
                <p className="bg-black opacity-65 text-white flex  px-20 py-4 my-5 w-80 h-20 "><span className="mx-5 text-red-600"><UserIcon size={20} /> </span> {item.name}<span className=""></span></p>

            </div>
          ))}
        </div>
      </div>


      <Footer />
    </body>
  );
};



