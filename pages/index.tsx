import { GetStaticProps } from 'next'
import {
  ListaProdutos,
  Header
} from "../components";

interface produto {
  nome: string;
  preco: number;
  image: string;
  gif: string;
}

interface propsHome {
  produtos: produto[];
}

export default function Home(props: propsHome) {
  const { produtos } = props;
  return (
    <>
      <Header />
      <ListaProdutos produtos={produtos} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      produtos: [
        {
          nome: "Sofá Margot II - Rosé",
          preco: 4000,
          image: "../image.png",
          gif: "../image.gif"
        },
        {
          nome: "Sofá Margot II - Rosé",
          preco: 4000,
          image: "../image.png",
          gif: "../image.gif"
        },
        {
          nome: "Sofá Margot II - Rosé",
          preco: 4000,
          image: "../image.png",
          gif: "../image.gif"
        },
        {
          nome: "Sofá Margot II - Rosé",
          preco: 4000,
          image: "../image.png",
          gif: "../image.gif"
        },
        {
          nome: "Sofá Margot II - Rosé",
          preco: 4000,
          image: "../image.png",
          gif: "../image.gif"
        },
        {
          nome: "Sofá Margot II - Rosé",
          preco: 4000,
          image: "../image.png",
          gif: "../image.gif"
        },
        {
          nome: "Sofá Margot II - Rosé",
          preco: 4000,
          image: "../image.png",
          gif: "../image.gif"
        },
        {
          nome: "Sofá Margot II - Rosé",
          preco: 4000,
          image: "../image.png",
          gif: "../image.gif"
        },
        {
          nome: "Sofá Margot II - Rosé",
          preco: 4000,
          image: "../image.png",
          gif: "../image.gif"
        },
        {
          nome: "Sofá Margot II - Rosé",
          preco: 4000,
          image: "../image.png",
          gif: "../image.gif"
        },
      ]
    }
  }
}
