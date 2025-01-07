import { Game } from '../../Pages/Home'
import { parseToBrl } from '../../utils'
import * as S from './styles'

import Product from '../Product/Index'

export type Props = {
  title: string
  background: 'gray' | 'black'
  games: Game[]
  id?: string
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
      tags.push(`${parseToBrl(game.prices.current)}`)
    }

    return tags
  }

  return (
    <S.Container id={id} background={background}>
      <div className="container">
        <h2>{title}</h2>
        <S.List>
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
        </S.List>
      </div>
    </S.Container>
  )
}

export default ProductList
