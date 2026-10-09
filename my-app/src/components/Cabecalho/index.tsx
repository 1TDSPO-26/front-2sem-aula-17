import { useContext } from "react";
import Menu from "../Menu/Menu";
import { NomeLojaContext } from "../../context/nomeLojaContext";


export default function Cabecalho() {
  const NomeLoja = useContext(NomeLojaContext);
  return (
    <header>
      <h1>{NomeLoja}</h1>
      <Menu />
    </header>
  )
}
