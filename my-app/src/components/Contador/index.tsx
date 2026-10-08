import { useState } from "react";

export function Contador() {
  const [quantidade, setQuantidade] = useState(0);
  return (
    <button onClick={() => setQuantidade(quantidade + 1)}>
      Cliques: {quantidade}
    </button>
  );
}

