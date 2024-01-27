import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }
`

export const Container = styled.div`
  max-width: 600px;
  margin: 0 auto 300px;
  background-color: #efefef;
  padding: 20px 30px;
  border-radius: 10px;
`
export const Pesquisa = styled.input`
  padding: 5px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 3px;
  display: block;
  width: 100%;
`

export default EstiloGlobal
