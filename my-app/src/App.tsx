import { Outlet } from "react-router";
import Cabecalho from "./components/Cabecalho";
import Rodape from "./components/Rodape";
import { useState } from "react";
import { Layout } from "./components/Layout";
import type { Tema } from "./types/types";

  

export default function App() {

  const [tema, setTema] = useState<Tema>('light');

  return (
    <div>
      <Layout tema={tema}/>
    </div>
  )
}



// export default function App() {

//   const [tema, setTema] = useState<Tema>('light');

//   return (
//     <div>
//       <Cabecalho />
//       <Outlet />
//       <Rodape />
//     </div>
//   )
// }
