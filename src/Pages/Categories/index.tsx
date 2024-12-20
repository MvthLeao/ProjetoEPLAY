import ProductList from '../../components/ProductList/Index'
import {
  useGetActionGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery,
  useGetSportGamesQuery,
  useGetSimulationGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGames } = useGetActionGamesQuery()
  const { data: fightGames } = useGetFightGamesQuery()
  const { data: rpgGames } = useGetRpgGamesQuery()
  const { data: sportGames } = useGetSportGamesQuery()
  const { data: simulationGames } = useGetSimulationGamesQuery()

  if (actionGames && fightGames && rpgGames && sportGames && simulationGames) {
    return (
      <>
        <ProductList
          games={actionGames}
          title={'Ação'}
          background={'black'}
          id="action"
        />
        <ProductList
          games={sportGames}
          title={'Esportes'}
          background={'gray'}
          id="sports"
        />
        <ProductList
          games={simulationGames}
          title={'Simulação'}
          background={'black'}
          id="simulation"
        />
        <ProductList
          games={fightGames}
          title={'Luta'}
          background={'gray'}
          id="fight"
        />
        <ProductList
          games={rpgGames}
          title={'RPG'}
          background={'black'}
          id="rpg"
        />
      </>
    )
  }

  return <h4>Carregando</h4>
}

export default Categories
