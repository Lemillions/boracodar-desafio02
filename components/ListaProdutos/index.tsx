import CardProduto from "../CardProduto"
import { Lista } from "./styles"

interface produto {
  nome: string;
  preco: number;
  image: string;
  gif: string;
}

interface propsLista {
  produtos: produto[];
}

export default function ListaProdutos(props: propsLista){
  const { produtos } = props;
  return (
    <Lista>
      {produtos.map((produto: produto, index:number)=>{
        return (
          <CardProduto produto={produto} key={index}/>
        )
      })}
    </Lista>
  )
}