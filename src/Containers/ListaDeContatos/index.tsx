import { useDispatch, useSelector } from 'react-redux'

import Contatos from '../../components/Contatos'
import { Titulo } from './styles'
import { Pesquisa } from '../../styles'

import { RootReducer } from '../../store'
import { alterarTermo } from '../../store/reducers/filtro'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { termo } = useSelector((state: RootReducer) => state.filtro)
  const dispatch = useDispatch()

  const filtraContatos = () => {
    return itens.filter(
      (item) => item.nome.toLowerCase().search(termo.toLowerCase()) >= 0
    )
  }

  return (
    <main>
      <div>
        <Titulo>Lista de Contatos</Titulo>
        <h3>Pesquisa por nome:</h3>
        <Pesquisa
          type="text"
          placeholder="Digite para pesquisar"
          value={termo}
          onChange={(evento) => dispatch(alterarTermo(evento.target.value))}
        />
        <ul>
          {filtraContatos().map((c) => (
            <li key={c.nome}>
              <Contatos
                id={c.id}
                nome={c.nome}
                email={c.email}
                telefone={c.telefone}
              />
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}

export default ListaDeContatos
