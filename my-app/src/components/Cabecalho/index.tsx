import { useContext } from "react";
import Menu from "../Menu/Menu";
import { NomeLojaContext } from "../../contexts/nomelojaContext";


export default function Cabecalho() {

const nomeLoja = useContext(NomeLojaContext);

  return (
    <header>
      <h1>{nomeLoja}</h1>
      <Menu/>
    </header>
  )
}
