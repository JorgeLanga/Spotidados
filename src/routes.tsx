import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PaginaInicial } from "./pages/paginaInicial";
import { Login } from "./pages/login";
import { CadastroDados } from "./pages/cadastroDados";
import { RegistarPassword } from "./pages/registarPassword";
import { ListarUsuarios } from "./pages/usuarios";
import { Destaques } from "./pages/destaques";
import{DestaquesDoUsuario} from "./pages/destaquesdousuario";
import { Pesquisar } from "./pages/pesquisar";

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
    path: "/listarUsuarios",
    element: <ListarUsuarios />,

  }, 
  
    {
      path: "/Destaques",
     element: <Destaques/>,
    },
    {
      path:"/DestaquesDoUsuario",
      element: <DestaquesDoUsuario/>,
    },
  {
    path: "/pesquisar",
    element: <Pesquisar />,
  }

]);

export function Routes() {
  return <RouterProvider router={router} />;
}
