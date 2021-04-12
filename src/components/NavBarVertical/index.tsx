import React from "react";
import {
  MdDashboard,
  MdArrowDownward,
  MdArrowUpward,
  MdExitToApp,
} from "react-icons/md";

import { NavBarVerticalContainer } from './style';
import { Link } from "../Link";

const NavBarVertical: React.FC = () => {
  return (
    <NavBarVerticalContainer>
      <ul>
        <li>
          <Link url={"/"} title={"Dashboard"}>
            <MdDashboard />
          </Link>
        </li>
        <li>
          <Link url={"/"} title={"Novo registro"}>
            <MdArrowDownward/>
          </Link>
        </li>
        <li>
          <Link url={"/"} title={"Entradas"}>
            <MdArrowDownward/>
          </Link>
        </li>
        <li>
          <Link url={"/"} title={"Saídas"}>
            <MdArrowUpward/>
          </Link>
        </li>
        <li>
          <Link url={"/"} title={"Sair"}>
            <MdExitToApp/>
          </Link>
        </li>
      </ul>
    </NavBarVerticalContainer>
  );
}

export { NavBarVertical }
