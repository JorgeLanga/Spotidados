import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PaginaInicial } from "./pages/paginaInicial";
import { Login } from "./pages/login";
import { CadastroDados } from "./pages/cadastroDados";
import { RegistarPassword } from "./pages/registarPassword"
//import{DestaquesDoUsuario} from "./pages/destaquesdousuario";
import { Pesquisar } from "./pages/pesquisar";
import { ListarUsuarios } from "./pages/listarUsuarios";


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
]);

export function Routes() {
  return <RouterProvider router={router} />;
}
