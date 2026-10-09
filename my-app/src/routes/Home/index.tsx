import { useEffect, useState } from "react";
import { Contador } from "../../components/Contador";

type TipoUsuarioGit = {
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
    user_view_type: string;
    site_admin:boolean;
}


export default function Home() {

    //Modificar o título da página;
    document.title = "Home";

    const [usuarios, setUsuarios] = useState<TipoUsuarioGit[]>([]);

    useEffect( ()=>{
        //Função assíncrona
        async function loadingData() {
            
            try {
                const response = await fetch("https://api.github.com/users");
                
                if(!response.ok){
                    throw new Error("A listagem falhou!");
                }
                
                const data:TipoUsuarioGit[] = await response.json();
                
                setUsuarios(data);

            } catch (error) {
                console.error(error);
            }
        }

        //Executando a função
        // loadingData();

    }, []);

    return (
        <main>
            <h2>Home</h2>
            <div>
                <ul>
                    {usuarios.map( (u,i)=> (
                        <li key={i}>{u.id} - {u.login} - <img src={u.avatar_url} alt={u.login} width={40}/></li>
                    ))}
                </ul>
            </div>

                    <Contador/>

        </main>
    )
}
