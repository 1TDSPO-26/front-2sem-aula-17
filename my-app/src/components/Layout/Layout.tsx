
import type { tema } from "../../types/types";
import Rodape from "../Rodape";
import { Outlet } from "react-router";
import Cabecalho from "../Cabecalho";
import type { LayoutProps } from "../../types/types";

export default function Layout({tema}: LayoutProps) {
  return (
    <>
    <Cabecalho/>
    <Outlet/>
    <Rodape />
    </>
  )
}
