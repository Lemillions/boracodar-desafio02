import { useState } from 'react'
import {
  Card,
  ContainerImagem,
  ContainerInfo,
  ImagemProduto,
  SwitchImage,
  NomeProduto,
  ButtonProduto,
  PrecoProduto
} from './styles'

interface produto {
  nome: string;
  preco: number;
  image: string;
  gif: string;
}

interface propsProduto {
  produto: produto
}

export default function CardProduto(props: propsProduto) {
  const [gifMode, setGifMode] = useState<boolean>(false)
  const { produto } = props;
  return (
    <Card>
      <ContainerImagem>
        <ImagemProduto src={gifMode ? produto.gif : produto.image} />
        <SwitchImage src={gifMode ? "../close.svg" : "../vector.svg"} onClick={() => { setGifMode(!gifMode) }} />
      </ContainerImagem>
      <ContainerInfo>
        <NomeProduto>
          {produto.nome}
        </NomeProduto>
        <PrecoProduto>
          {produto.preco.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
        </PrecoProduto>
        <ButtonProduto>
          ADICIONAR À CESTA
        </ButtonProduto>
      </ContainerInfo>
    </Card>
  )
}