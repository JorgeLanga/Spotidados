import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "./pages/login";
import { PaginaInicial } from "./pages/paginaInicial";
import { CadastroDados } from "./pages/cadastroDados";
import { RegistarPassword } from "./pages/registarPassword";
import { ListarUsuarios } from "./pages/usuarios";

import{DestaquesDoUsuario} from "./pages/destaquesdousuario";

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
  {
    path: "/Listar Usuarios",
    element: <ListarUsuarios />,
  }, 
  
    {
      path:"/DestaquesDoUsuario",
      element: <DestaquesDoUsuario/>,
    }
]);

export function Routes() {
  return <RouterProvider router={router} />;
}
