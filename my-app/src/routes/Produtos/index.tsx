
import { useEffect, useState } from "react";
import type { TipoProduto, TipoProdutoJson } from "../../types/types";
import { Link, useNavigate } from "react-router";
import Cardproduto from "../../components/CardProduto/Cardproduto";


export default function Produtos() {
  document.title = "Produtos"

  const navigate = useNavigate();
  const [produtos, setProdutos] = useState<TipoProduto[]>([])

  useEffect(() => {
    // requisição para o backend apenas uma vez
    const carregarProdutos = async () => {
      try {
        const response = await fetch("http://localhost:3001/produtos");
        if (!response.ok) {
          throw new Error(`Erro na listagem de produtos: ${response.status} ${response.statusText}`);
        }
        const data = (await response.json()).map((produto: TipoProduto) => ({
          ...produto,
          preco: Number(produto.preco),
          estoque: Number(produto.estoque),
        }));
        console.log("Produtos carregados:", data);
        setProdutos(data);
      } catch (error) {
        console.error("Erro ao carregar produtos:", error);
      }
    };
    carregarProdutos();
  }, [])

  const handleDeleteProduto = async (id: string) => {
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
    <main>
      <h2>Produtos</h2>
       <div className="flex">
       {produtos.map( (p)=>(
                    <Cardproduto produto={p} />
                ))}
      </div>     

      {/* <table border={1} cellPadding={10} style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#be7310', color: '#050505' }}>
            <th>ID</th>
            <th>Nome</th>
            <th>Preço</th>
            <th>Descrição</th>
            <th>Avatar</th>
            <th>Editar</th>
          </tr>
        </thead>
        <tbody>
          {produtos.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.nome}</td>
              <td>{p.preco.toFixed(2)}</td>
              <td>{p.estoque}</td>
              <td><img src={p.avatar} alt={p.nome} width={60} height={60} style={{ objectFit: 'cover' }} /></td>
              <td><Link to={`/editar-produtos/${p.id}`}>Editar</Link> | <Link to={`#`} onClick={() => handleDeleteProduto(p.id)}>Deletar</Link></td>
            </tr>
          ))}
        </tbody>
        <tfoot>
        </tfoot>
        <tr>
          <td>Quantidade de produtos - {produtos.length}</td>
        </tr>
      </table> */}



    </main >
  )
}
