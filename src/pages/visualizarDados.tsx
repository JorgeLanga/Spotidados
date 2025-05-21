
import { useParams } from "react-router-dom";

import { Footer } from "../components/footer";
import { ArrowLeft, UserIcon } from "@phosphor-icons/react";
import { NavLink } from 'react-router-dom';

import { usersData } from "../data/data";


export const VisualizarDados = () => {
  

  const { id } = useParams();
 
  const user = usersData.find((u) => u.id === Number(id));

  if (!user) return <p>Usuário não encontrado</p>;

  return (
    <body className="">
      
        <div
          key={user.id}
          
        className=" mb-2 bg-red-950 opacity-85 text-white py-2 pb-2">
            <div className="flex" >
                <h2 className="p-2 mx-3 my-2 w-10 h-10 bg-black rounded-full "><UserIcon size={25} weight="fill" className=" "/></h2>
          <h2 className="my-3.5">{user.name}</h2>
        <NavLink to={`/DestaquesDoUsuario`}>
              <ArrowLeft size={26} weight="fill" className=" absolute left-85 my-2 text-white " />
              <span className="absolute left-85 my-2 mt-8">Voltar</span>
        </NavLink>
        
            </div>
          
          
          <h3 className="py-3 mx-2 text-center">Músicas mais escutadas:</h3>
          <ul className="flex justify-center flex-wrap " >
            {user.mostListenedSongs.map((musica) => (
              <li key={musica.id} style={{ marginBottom: "1rem" }} className="bg-black rounded-2xl p-4 m-2 w-96">
                <p><strong>{musica.titulo}</strong> - {"Artista: "}{musica.cantor} ({musica.ano})</p>
        
               <p>Estilo: {musica.estiloMusical} | Aderência: {musica.aderencia}</p> 
             
                <img src={musica.img} alt={musica.titulo} width="350"  className="pt-2 h-45 "/>
              </li>
            ))}
          </ul>
        </div>
 
      <Footer />
    </body>
  );
};
