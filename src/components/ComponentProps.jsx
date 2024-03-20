import React from "react"
import styled from "styled-components"


const Card = styled.div`
    border: solid #f062928c;
    width: 30vw;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    font-family: monospace;
    border-radius: 3%;
    margin: 1%;
    color: #21020ccc;

    img{
    width: 50%;
}
`

function ComponentProps({ produto, valor, imagem, children }) {
    return (
        <Card>
           <img src={imagem} alt="" />
           <h2> {produto} </h2>
           <h2> {valor} </h2>
           {children}
        </Card>

    )
}

export default ComponentProps