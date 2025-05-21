import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PaginaInicial } from "./pages/paginaInicial";
import { Login } from "./pages/login";
import { CadastroDados } from "./pages/cadastroDados";
import { RegistarPassword } from "./pages/registarPassword";
import { ListarUsuarios } from "./pages/listarUsuarios";
import{DestaquesDoUsuario} from "./pages/destaquesdousuario";
import{pesquisar} from "./pages/pesquisar"



const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
   {
    path: "/",
    element: <PaginaInicial />,
  } ,
  {
    path: "/cadastro",
    element: <CadastroDados />,
  },
  {
    path: "/registarPassword",
    element: <RegistarPassword />,
  } 
  ,

  {
    path: "/pesquisar",
    element: <Pesquisar />,
  }, 
  
  {
    path: "/lista",
    element: <ListarUsuarios />,
  },

  
    
    {
      path:"/DestaquesDoUsuario",
      element: <DestaquesDoUsuario/>,

    },





]);


export function Routes() {
  return <RouterProvider router={router} />;
}
