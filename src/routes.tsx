import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "./pages/login";
import { PaginaInicial } from "./pages/paginaInicial";
import { CadastroDados } from "./pages/cadastroDados";
import { RegistarPassword } from "./pages/registarPassword";
<<<<<<< HEAD
import { ListarUsuarios } from "./pages/usuarios";

import{DestaquesDoUsuario} from "./pages/destaquesdousuario";
=======
import { ListarUsuarios } from "./pages/listarUsuarios";
import{DestaquesDoUsuario} from "./pages/destaquesdousuario";
//import{pesquisar} from "./pages/pesquisar"


>>>>>>> 94eda82e8f8e4359d87aeb37e747b90baafb667b

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
   {
    path: "/Pagina Inicial",
    element: <PaginaInicial />,
  } ,
  {
    path: "/Cadastro",
    element: <CadastroDados />,
  },
  {
    path: "/Registar Password",
    element: <RegistarPassword />,
  } 
  ,
<<<<<<< HEAD
  {
    path: "/Listar Usuarios",
    element: <ListarUsuarios />,
  }, 
  
    {
      path:"/DestaquesDoUsuario",
      element: <DestaquesDoUsuario/>,
    }
=======

  // {
  //   path: "/pesquisar",
  //   element: <pesquisar />,
  // }, 
  
  {
    path: "/lista",
    element: <ListarUsuarios />,
  },

  
    
    {
      path:"/DestaquesDoUsuario",
      element: <DestaquesDoUsuario/>,

    },





>>>>>>> 94eda82e8f8e4359d87aeb37e747b90baafb667b
]);


export function Routes() {
  return <RouterProvider router={router} />;
}
