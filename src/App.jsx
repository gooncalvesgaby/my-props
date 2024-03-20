import React from "react"
import ComponentProps from "./Components/ComponentProps.jsx"
import styled from "styled-components"
import Kinderovo from "./assets/kinder.webp"
import Passatempo from "./assets/passatempo.webp"
import Prestigio from "./assets/prestigio.webp"
import Sensacao from "./assets/sensacao.jpg"


const Section = styled.section`
  border: solid red;
  display: flex;
  justify-content: space-evenly;
`

function App() {

  return (
    <Section>

    <ComponentProps produto="Ovo Kinder" valor="50$" imagem={Kinderovo}>
      <h2>Kinder ovo tem surpresa com brinquedo!</h2>
      <h5>Desconto de 5% ou um brinquedo misterioso?</h5>
    </ComponentProps>

    <ComponentProps produto="Ovo passatempo" valor="55$" imagem={Passatempo}>
      <h2>Vai pegar ou deixar o tempo passar?</h2>
      <h5>Se eu fosse você eu pegava!</h5>
    </ComponentProps>

    <ComponentProps produto="Ovo prestigio" valor="60$" imagem={Prestigio}>
      <h2>Um prestigio ter você na minha vida!</h2>
      <h5>O ovo que te prestigia.</h5>
    </ComponentProps>

    <ComponentProps produto="Ovo sensação" valor="40$" imagem={Sensacao}>
      <h2>A melhor sensação do mundo!</h2>
      <h3>Com certeza é levar o Sensação.</h3>
    </ComponentProps>    

    </Section>
  )
}

export default App
