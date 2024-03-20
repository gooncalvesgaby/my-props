import React from "react"
import ComponentProps from "./components/ComponentProps.jsx"
import styled from "styled-components"
import {createGlobalStyle} from "styled-components"
import Kinderovo from "./assets/kinder.webp"
import Passatempo from "./assets/passatempo.webp"
import Prestigio from "./assets/prestigio.webp"
import Sensacao from "./assets/sensacao.jpg"

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`

const Section = styled.section`
  display: flex;
  justify-content: space-evenly;
`

function App() {

  return (
    <Section>
    <GlobalStyle/>

    <ComponentProps produto="Ovo Kinder" valor="50$" imagem={Kinderovo}>
      <h2>Kinder ovo tem surpresa!</h2>
      <h5>Desconto de 5% ou um brinquedo misterioso?</h5>
    </ComponentProps>

    <ComponentProps produto="Ovo passatempo" valor="55$" imagem={Passatempo}>
      <h2>Pega ou passa?</h2>
      <h5>Se eu fosse você eu pegava!</h5>
    </ComponentProps>

    <ComponentProps produto="Ovo prestigio" valor="60$" imagem={Prestigio}>
      <h2>Um prestigio ter você!</h2>
      <h5>O ovo que te prestigia.</h5>
    </ComponentProps>

    <ComponentProps produto="Ovo sensação" valor="40$" imagem={Sensacao}>
      <h2>O melhor do mundo!</h2>
      <h3>Com certeza é o Sensação.</h3>
    </ComponentProps>    

    </Section>

  )
}

export default App
