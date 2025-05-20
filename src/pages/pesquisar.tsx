import { useEffect, useState } from "react";
import { Footer } from "../components/footer";
import type { userProps } from "../types/users";


export const Pesquisar = () => {
    const [refresh, setRefresh] = useState(0);
  const [users, setCourses] = useState<userProps[]>([]);

  useEffect(() => {
    setCourses(users);
  }, [refresh]);
    return (
        <body className="bg-red-800">
            <div>
                 <input type="search" placeholder="Pesquisar" className=" bg-white"/>

               <button  onClick={() => setRefresh(refresh + 1)
                
               } className=" w-40 bg-cyan-700 hover:bg-cyan-600 cursor-pointer text-white px-4 py-2 rounded-md"> Clique</button>
            </div>

            
         <section className="grid grid-cols-4 gap-10">
          {users.map((user) => (
            <div
              key={user.id}
              className="bg-white shadow-md rounded-lg p-5 my-5"
            >
              <h1>{user.name}</h1>
              <p>Email: {user.email}</p>
              <p>Data: {user.birth}</p>
            

            </div>
          ))}
        </section>
            


            <Footer/>
        </body>

    )

}