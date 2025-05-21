import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PaginaInicial } from "./pages/paginaInicial";
import { Login } from "./pages/login";
import { CadastroDados } from "./pages/cadastroDados";
import { RegistarPassword } from "./pages/registarPassword";
import { ListarUsuarios } from "./pages/listarUsuarios";
import{DestaquesDoUsuario} from "./pages/destaquesdousuario";
import { VisualizarDados } from "./pages/visualizarDados";
import { Historico } from "./pages/historico";





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
  } ,
  

  {
    path: "/lista",
    element: <ListarUsuarios />,


  },
    {
      path:"/DestaquesDoUsuario",
      element: <DestaquesDoUsuario/>,
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
