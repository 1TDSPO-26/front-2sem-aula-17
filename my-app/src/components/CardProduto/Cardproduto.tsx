import type { TipoProdutoAll } from "../../types/types";



export default function Cardproduto({produto} : TipoProdutoAll) {
  return (
    <div className="border-2 p-2 py-6 mx-2.5 ">
      <h2>Nome do Produto : {produto.nome} </h2>
      <p>Preço: {produto.preco.toFixed(2)}</p>
      <figure>
        <img src={produto.avatar} alt={produto.nome} width={50}/>
        <figcaption>Quantidade Disponivel: {produto.estoque}</figcaption>
      </figure>
      Ações
    </div>
  )
}
