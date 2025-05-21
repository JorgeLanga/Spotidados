import { UserIcon } from "@phosphor-icons/react";
import { NavLink } from "react-router-dom";

import definicoes from "../../public/definicoes.png";
import historico from "../../public/historico.png";
import home from "../../public/home.png";

export const Footer = () => {
  return (
    <div>
      <footer>
        <div className="flex flex-row space-around  fixed bottom-0 bg-linear-to-t bg-red-950 to-black rounded w-screen">
          <NavLink to={""}>
            <span>
              <img src={home} className="h-10 w- mx-5.5 " />
            </span>
          </NavLink>

          <NavLink to={`/lista`}>
            <UserIcon
              size={32}
              weight="fill"
              className="text-white h-10 ml-8"
            />
          </NavLink>

          <NavLink to={""}>
            <span>
              <img src={historico} alt="" className="h-10 w- mx-8" />
            </span>
          </NavLink>

          <NavLink to={""}>
            <span>
              <img
                src={definicoes}
                alt=""
                className="h-10 w- ml-10 text-white"
              />
            </span>
          </NavLink>
        </div>
      </footer>
    </div>
  );
};
