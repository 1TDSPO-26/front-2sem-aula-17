import { Outlet } from "react-router";
import Cabecalho from "./components/Cabecalho";
import type { tema } from "./types/types";
import Rodape from "./components/Rodape";
import { useState } from "react";
import Layout from "./components/Layout/Layout";



export default function App() {
  const [tema, setTema] = useState<tema>(`Light Theme`);
  return(
    <div>
      <Layout tema={tema}/>
    </div>
  )

}





// export default function App() {

//   const [tema, setTema] = useState<tema>(`Light Theme`);
  
//   return (
//     <main>
//      <Cabecalho/>
//     <Outlet/>
//      <Rodape/>
//     </main>
//   );
// }
