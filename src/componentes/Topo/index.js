import './estilo.css'

export default function Topo () {
  return (
    <header>
        <div className={'limitar-secao header'}>
          <img src="assets/logo.png" alt="logotipo óticas vida - imagem de óculos à esquerda e nome da ótica à direita" />

          <nav>
            <a href="#produtos">PRODUTOS</a>
            <a href="#sobre">SOBRE</a>
            <a href="#contatos">CONTATOS</a>
          </nav>
        </div>
    </header>
  )
}