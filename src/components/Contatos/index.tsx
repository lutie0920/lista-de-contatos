import { useDispatch } from 'react-redux'

import * as S from './styles'

import { remover } from '../../store/reducers/contatos'
import ContatoClass from '../../models/Contato'

type Props = ContatoClass

const Contatos = ({ nome, email, telefone, id }: Props) => {
  const dispatch = useDispatch()

  return (
    <S.Card>
      <div>
        <S.Info>{nome}</S.Info>
        <S.Info>{email}</S.Info>
        <S.Info>{telefone}</S.Info>
      </div>
      <S.divBotao>
        <S.Botao onClick={() => dispatch(remover(id))}>Remover</S.Botao>
      </S.divBotao>
    </S.Card>
  )
}

export default Contatos
