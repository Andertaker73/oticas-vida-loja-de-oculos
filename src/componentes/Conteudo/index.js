import SecaoCapa from '../SecaoCapa'
import SecaoContato from '../SecaoContato'
import SecaoProdutos from '../SecaoProdutos'
import SecaoSobre from '../SecaoSobre'


export default function Conteudo () {
  return (
    <body>
      <SecaoCapa />
      <SecaoProdutos />
      <SecaoSobre />
      <SecaoContato />
    </body>
  )
}