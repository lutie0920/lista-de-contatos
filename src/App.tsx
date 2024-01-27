import { Provider } from 'react-redux'
import EstiloGlobal, { Container } from './styles'
import ListaDeContatos from './Containers/ListaDeContatos'
import Cadastro from './components/Cadastro'

import store from './store'

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <ListaDeContatos />
        <Cadastro />
      </Container>
    </Provider>
  )
}

export default App
