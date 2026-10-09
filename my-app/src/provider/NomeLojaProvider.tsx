import { NomeLojaContext } from "../contexts/nomelojaContext";
import type { NomeLojaProviderProps } from "../types/types";

export function NomeLojaProvider({ children }: NomeLojaProviderProps) {
  return <NomeLojaContext value="ProdutoStore">{ children }</NomeLojaContext>;
}
