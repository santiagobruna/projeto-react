import { useRef, useState } from 'react'
import {v4} from 'uuid'
import { AddButton, Container, Product, TrashButton } from './styles'

// React Hooks
// useRef ajuda a capturar o valor de um input
// useState  / estado -> É uma variável, que, toda vez que troca de valor, a tela irá recarregar os valores
function App() {
  //estado
  const [produtos, setProdutos] = useState([])
  //ref
  const inputRef = useRef()

  function cliqueiNoBotao(){
    setProdutos([{id: v4(), nome: inputRef.current.value}, ...produtos]);
    inputRef.current.value = ''
  }

  function deletarProduto(id){
    setProdutos(produtos.filter(produto => produto.id !== id))
  }
  return (
    <>
     <Container>
      <h1>Lista de compras</h1>
      <input type="text" placeholder="produto..." ref={inputRef}/>
      <AddButton onClick={cliqueiNoBotao}>Adicionar</AddButton>

      {
        produtos.map((produto) => (
          <Product key={produto.id}>
            <p>{produto.nome}</p>
            <TrashButton onClick={() => deletarProduto(produto.id)}>🗑️ </TrashButton>
          </Product>
        ))
      }
     </Container>
    </>
  )
}

export default App
