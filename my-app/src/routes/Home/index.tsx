"use client";

import { useEffect, useState } from "react";
import type { Contador } from "../../components/Contador/Contador";

// 1. Definimos o tipo para UM usuário individual
type UsuarioType = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  name?: string | null;
  company?: string | null;
  blog?: string | null;
  location?: string | null;
  email?: string | null;
  hireable?: boolean | null;
  bio?: string | null;
  twitter_username?: string | null;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
};

export default function Home() {
  // Alterando o título de forma segura para Next.js (opcionalmente pode usar a Metadata API)
  if (typeof window !== "undefined") {
    document.title = "Home";
  }

  // 2. O estado guarda um array de 'UsuarioType'
  const [usuarios, setUsuarios] = useState<UsuarioType[]>([]);

  useEffect(() => {
    async function carregarUsuarios() {
      try {
        const response = await fetch("https://api.github.com/users");
        
        if (!response.ok) {
          throw new Error("Erro ao carregar os usuários");
        }

        const dados: UsuarioType[] = await response.json();
        setUsuarios(dados);
      } catch (error) {
        console.error(error);
      }
    }

    carregarUsuarios();
  }, []); // Array de dependências vazio para executar apenas uma vez ao montar

  return (
    <main style={{ padding: "20px" }}>
      <h1>Lista de Usuários do GitHub</h1>
      <ul>
        {usuarios.map((user) => (
          <li key={user.id}>
            {user.id} - {user.login} - <img src={user.avatar_url} alt="users" width={50} height={50} style={{ borderRadius: "50%" }} />
          </li>
        ))}
      </ul>

    
    </main>
  );
}