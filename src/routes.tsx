import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "./pages/login";
import { PaginaInicial } from "./pages/paginaInicial";
import { CadastroDados } from "./pages/cadastroDados";
import { RegistarPassword } from "./pages/registarPassword";
import { ListarUsuarios } from "./pages/listarUsuarios";


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
  } 
]);

export function Routes() {
  return <RouterProvider router={router} />;
}
