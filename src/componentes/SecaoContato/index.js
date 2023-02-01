import './estilo.css'

export default function SecaoContato () {
  return (
    <section id='contatos' className={'secao-contato'}>
      <div className={'limitar-secao'}>
        <h2>FALE CONOSCO</h2>
        <p>Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento.</p>
        <div className={'container-contato'}>
          <div className={'conteudo-contato'}>
            <h3>Contato</h3>
            <div>
              <img src="assets/local.png" alt="pin de mapa" />
              <span>Nova Iguaçu, RJ</span>
            </div>
            <div>
              <img src="assets/telefone.png" alt="ícone telefone" />
              <span>(21) 9999-9999</span>
            </div>
            <div>
              <img src="assets/email.png" alt="ícone envelope" />
              <span>contato@oticavida.com</span>
            </div>
          </div>
          <div className={'conteudo-contato'}>
            <h3>Nossa Redes Sociais</h3>
            <div>
              <img src="assets/fb.png" alt="ícone facebook" />
              <span>/OticaVida</span>
            </div>
            <div>
              <img src="assets/ig.png" alt="ícone instagram" />
              <span>@oticavidarj</span>
            </div>
            <div>
              <img src="assets/tt.png" alt="ícone twitter" />
              <span>@oticavidarj</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}