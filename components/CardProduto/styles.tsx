import styled from "styled-components";

export const Card = styled.div`
  width: 550px;
  height: 275px;
  display: flex;
  border-radius: 10px;
  flex-flow: row nowrap;
  align-items: center;
  background-color: #D9CDF7;
  @media (max-width: 600px){
    flex-flow: column;
  }
`

export const ContainerImagem = styled.div`
  width: 250px;
  height: 140px;
  position: relative;
`

export const ImagemProduto = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const SwitchImage = styled.img`
  position: absolute;
  width: 33px;
  height: 23px;
  top: 0;
  right: 0;
  margin: 10px;
  color: #271A45;
  cursor: pointer;
`

export const ContainerInfo = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  gap: 5px;
`

export const NomeProduto = styled.h1`
  color: #271A45;
`

export const PrecoProduto = styled.span`
  color: #271A45
`
export const ButtonProduto = styled.button`
  background: transparent;
  color: #271A45;
  font-size: 1.5em;
  padding: 0.25em 1em;
  border: 2px solid #271A45;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
      background-color: #271A45;
      color: #D9CDF7;
  }
`