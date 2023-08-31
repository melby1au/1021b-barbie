import Filme from "../filme/Filme"
import "./Main.css"
export default function main(){
    return(
        <main className="content-main">
            <Filme titulo="barbie" sinopse=" atupatarapitas" imagem="./barbie.png"/>
            <Filme titulo="transformes" sinopse="coloque o cu no meu peito" imagem="./tranformi.jpg"/>
        </main>
    )
}