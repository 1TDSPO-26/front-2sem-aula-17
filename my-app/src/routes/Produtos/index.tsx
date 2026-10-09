import { useEffect, useState } from "react";
import type { TipoProduto } from "../../types/types";
import { Link, useNavigate } from "react-router";
import ProdutoCard from "../../components/ProdutoCard";

export default function Produtos() {
  //Modificar o título da página;
  document.title = "Produtos";

  const navigate = useNavigate();

  //Criando o recipiente da lista de dados e tipando com o tipo de produto
  const [produtos, setProdutos] = useState<TipoProduto[]>([]);

  useEffect(() => {
    //Simulando a requisição para o backend

    const carregaProdutos = async () => {
      try {
        const resposta = await fetch("http://localhost:3001/produtos");

        if (!resposta.ok) {
          throw new Error(
            `Erro na listagem de produtos: ${resposta.status} - ${resposta.statusText}`,
          );
        }

        const data: TipoProduto[] = await resposta.json();
        console.log(data);
        setProdutos(data);
      } catch (error) {
        console.error(error);
      }
    };

    carregaProdutos();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      const response = await fetch(`http://localhost:3001/produtos/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error(
          `A exclusão falhou: ${response.status} - ${response.statusText}`,
        );
      }

      //MSG de SUCESSO
      alert("O produto foi excluído com sucesso!");
      //Redirecionando para a página de produtos
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main style={{ padding: "20px" }}>
      <h2>Produtos</h2>
      <div className="flex">
        {produtos.map((p) => (
          <ProdutoCard produto={p}  />
        ))}
      </div>

      {/* <div className="flex">
        {produtos.map((p) => (
          <ProdutoCard
            nome={p.nome}
            preco={p.preco}
            estoque={p.estoque}
            avatar={p.avatar}
          />
        ))}
      </div> */}

      {/* <table border={1} cellPadding={10} style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr style={{ backgroundColor: '#2c3e50', color: '#ffffff' }}>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Preço</th>
                        <th>Estoque</th>
                        <th>Avatar</th>
                        <th>Ações</th>
                    </tr> 
                </thead>
                <tbody>
                    {produtos.map((p) => (
                        <tr key={p.id}>
                            <td>{p.id}</td>
                            <td>{p.nome}</td>
                            <td>{p.preco}</td>
                            <td>{p.estoque}</td>
                            <td><img src={p.avatar} alt={p.nome} width={60} height={60} style={{ objectFit: 'cover' }} /></td>
                            <td>
                                <Link to={`/editar-produtos/${p.id}`}>Editar</Link> | <Link to="#" onClick={()=> handleDelete(p.id)}>Excluir</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={6}>Quantidade de produtos - {produtos.length}</td>
                    </tr>
                </tfoot>
            </table> */}
    </main>
  );
}
