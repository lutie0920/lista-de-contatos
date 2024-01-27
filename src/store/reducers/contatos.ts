import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

type ContatosState = {
  itens: Contato[]
}

const initialState: ContatosState = {
  itens: [
    {
      id: 1,
      nome: 'Luciana Tie Kamon',
      email: 'luciana@gmail.com',
      telefone: '43988124037'
    },
    {
      id: 2,
      nome: 'Maria da Silva',
      email: 'maria@gmail.com',
      telefone: '43940807573'
    },
    {
      id: 3,
      nome: 'Lucas Moraes',
      email: 'lucas@gmail.com',
      telefone: '43923343269'
    }
  ]
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (contato) => contato.id !== action.payload
      )
    },
    cadastrar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const contatoJaExixte = state.itens.find(
        (contato) =>
          contato.nome.toLowerCase() === action.payload.nome.toLowerCase()
      )

      if (contatoJaExixte) {
        alert('Esse contato já existe')
      } else {
        const ultimoContato = state.itens[state.itens.length - 1]

        const contatoNovo = {
          ...action.payload,
          id: ultimoContato ? ultimoContato.id + 1 : 1
        }
        state.itens.push(contatoNovo)
      }
    }
  }
})

export const { remover, cadastrar } = contatosSlice.actions

export default contatosSlice.reducer
