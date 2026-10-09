import { NomeLojaContext } from "../context/nomeLojaContext";
import type { NomeLojaProviderProps } from "../types/types";

export function NomeLojaProvider({ children }: NomeLojaProviderProps) {
  return <NomeLojaContext value="ProdutoStore FIAP">{children}</NomeLojaContext>;
}

