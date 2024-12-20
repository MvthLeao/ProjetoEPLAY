import { Game } from '../../Pages/Home'
import Product from '../Product/Index'
import { Container, List } from './styles'

export type Props = {
  title: string
  background: 'gray' | 'black'
  games: Game[]
  id?: string
}

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const ProductList = ({ background, title, games, id }: Props) => {
  const getGameTags = (game: Game) => {
    const tags = []

    if (game.release_date) {
      tags.push(game.release_date)
    }

    if (game.prices.discount) {
      tags.push(`${game.prices.discount}%`)
    }

    if (game.prices.current) {
      tags.push(`${formataPreco(game.prices.current)}`)
    }

    return tags
  }

  return (
    <Container id={id} background={background}>
      <div className="container">
        <h2>{title}</h2>
        <List>
          {games.map((Game) => (
            <li key={Game.id}>
              <Product
                id={Game.id}
                title={Game.name}
                category={Game.details.category}
                system={Game.details.system}
                description={Game.description}
                infos={getGameTags(Game)}
                image={Game.media.thumbnail}
              />
            </li>
          ))}
        </List>
      </div>
    </Container>
  )
}

export default ProductList
