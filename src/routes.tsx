import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PaginaInicial } from "./pages/paginaInicial";
import { Login } from "./pages/login";
import { CadastroDados } from "./pages/cadastroDados";
import { RegistarPassword } from "./pages/registarPassword";
<<<<<<< HEAD
=======
import { ListarUsuarios } from "./pages/listarUsuarios";
<<<<<<< HEAD
import { Destaques } from "./pages/destaques";
import{DestaquesDoUsuario} from "./pages/destaquesdousuario";
=======
>>>>>>> 14df99e1b045d74d411205ac17997be8689f8dcf
import { Pesquisar } from "./pages/pesquisar";

>>>>>>> 82e1e77d0d985540394d224ef140e76fc7c98073

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
  
<<<<<<< HEAD

=======
  {
    path: "/listarUsuarios",
    element: <ListarUsuarios />,
<<<<<<< HEAD
  }, 
  
    {
      path: "/Destaques",
     element: <Destaques/>,
    },
    {
      path:"/DestaquesDoUsuario",
      element: <DestaquesDoUsuario/>,
    }
=======
  } ,
>>>>>>> 14df99e1b045d74d411205ac17997be8689f8dcf
  {
    path: "/pesquisar",
    element: <Pesquisar />,
  }

>>>>>>> 82e1e77d0d985540394d224ef140e76fc7c98073
]);

export function Routes() {
  return <RouterProvider router={router} />;
}
