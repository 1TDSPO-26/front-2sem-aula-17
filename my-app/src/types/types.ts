import type { ReactNode } from "react";


export interface TipoProduto {
  id: number;
  nome: string;
  preco: number;
  estoque: number;
  avatar: string;
}

export interface TipoProdutoAll {
  produto: TipoProduto;
}

export type TipoProdutoJson = {
  id : string;
  nome : string;
  preco : number;
  estoque : number;
  avatar : string;
}

export  type tema = `Light Theme` | `Dark Theme`;

export type LayoutProps = {
  tema: tema;
}

export type NomeLojaProviderProps = {
children: ReactNode;
}