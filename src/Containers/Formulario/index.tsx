import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { cadastrar } from '../../store/reducers/contatos'

import { Pesquisa } from '../../styles'
import { Salvar, BotaoSalvar } from './styles'

const Formulario = () => {
  const dispatch = useDispatch()
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault()

    dispatch(cadastrar({ nome, email, telefone }))
  }

  return (
    <form onSubmit={cadastrarContato}>
      <label>Nome Completo:</label>
      <Pesquisa
        value={nome}
        onChange={(evento) => setNome(evento.target.value)}
        type="text"
      />
      <label>E-mail</label>
      <Pesquisa
        value={email}
        onChange={({ target }) => setEmail(target.value)}
        type="text"
      />
      <label>Telefone</label>
      <Pesquisa
        value={telefone}
        onChange={({ target }) => setTelefone(target.value)}
        type="text"
        placeholder="digitar somente números"
      />
      <Salvar>
        <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
      </Salvar>
    </form>
  )
}

export default Formulario
