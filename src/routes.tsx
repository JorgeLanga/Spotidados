import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PaginaInicial } from "./pages/paginaInicial";
import { Login } from "./pages/login";
import { CadastroDados } from "./pages/cadastroDados";
import { RegistarPassword } from "./pages/registarPassword";
<<<<<<< HEAD
import { ListarUsuarios } from "./pages/usuarios";
import { Destaques } from "./pages/destaques";
import{DestaquesDoUsuario} from "./pages/destaquesdousuario";
=======
<<<<<<< HEAD
=======
import { ListarUsuarios } from "./pages/listarUsuarios";
<<<<<<< HEAD
import { Destaques } from "./pages/destaques";
import{DestaquesDoUsuario} from "./pages/destaquesdousuario";
=======
>>>>>>> 14df99e1b045d74d411205ac17997be8689f8dcf
>>>>>>> 68add4c61f7d48ebdb8be59849aa576dd71525b2
import { Pesquisar } from "./pages/pesquisar";

<<<<<<< HEAD
=======

>>>>>>> dev-neyla
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

  }, 
  
    {
      path: "/Destaques",
     element: <Destaques/>,
    },
    {
      path:"/DestaquesDoUsuario",
      element: <DestaquesDoUsuario/>,
<<<<<<< HEAD
    },
=======
<<<<<<< HEAD
    } ,
>>>>>>> dev-neyla
=======
  } ,
>>>>>>> 14df99e1b045d74d411205ac17997be8689f8dcf
>>>>>>> 68add4c61f7d48ebdb8be59849aa576dd71525b2
  {
    path: "/pesquisar",
    element: <Pesquisar />,
  }
<<<<<<< HEAD

]);
=======
])
>>>>>>> dev-neyla

export function Routes() {
  return <RouterProvider router={router} />;
}
