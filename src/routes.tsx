import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "./pages/login";
import { PaginaInicial } from "./pages/paginaInicial";
import { CadastroDados } from "./pages/cadastroDados";
import { RegistarPassword } from "./pages/registarPassword";
import { ListarUsuarios } from "./pages/listarUsuarios";
import{DestaquesDoUsuario} from "./pages/destaquesdousuario";

import { VisualizarDados } from "./pages/visualizarDados";
import { Historico } from "./pages/historico";


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

  } ,
  
    {
      path:"/DestaquesDoUsuario",
      element: <DestaquesDoUsuario/>,
    },
  {
    path: "/lista",
    element: <ListarUsuarios />,
  }
  ,
  {
      path:"/dadosUsuario/:id",
      element: <VisualizarDados/>,
    }, 
     {
      path:"/historico/:id",
      element: <Historico/>,
    }

  
]);


export function Routes() {
  return <RouterProvider router={router} />;
}
