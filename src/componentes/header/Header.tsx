import './Header.css'
function Header(){
    let texto = "tere"
    function mudaTexto(){
        texto = "terenciani"
    }
    return(
        <>
        <header>
            <div>
                logo
            </div>
            <nav>
                <ul>
                    <li>
                        <input className='pisca' type="text" />
                    </li>
                    <li>
                        <a href="#">Página inicial</a>
                    </li>
                    <li>
                        <a href="#">Sobre</a>
                    </li>
                    <li>
                        <a href="#">Notícias</a>
                    </li>
                    <li>
                        <a href="#">Contato</a>
                    </li>
                </ul>
            </nav>
        </header>
        <div>
           
            <p className='txtdig' >pesquisa: {texto}</p>
        </div>
        </>
    )
}
export default Header