import ProductList from '../../components/ProductList/Index'
import {
  useGetActionGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery,
  useGetSportGamesQuery,
  useGetSimulationGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGames, isLoading: isLoadingAction } =
    useGetActionGamesQuery()
  const { data: fightGames, isLoading: isLoadingFight } =
    useGetFightGamesQuery()
  const { data: rpgGames, isLoading: isLoadingRpg } = useGetRpgGamesQuery()
  const { data: sportGames, isLoading: isLoadingSport } =
    useGetSportGamesQuery()
  const { data: simulationGames, isLoading: isLoadingSimulation } =
    useGetSimulationGamesQuery()

  return (
    <>
      <ProductList
        games={actionGames}
        title={'Ação'}
        background={'black'}
        id="action"
        isLoading={isLoadingAction}
      />
      <ProductList
        games={sportGames}
        title={'Esportes'}
        background={'gray'}
        id="sports"
        isLoading={isLoadingSport}
      />
      <ProductList
        games={simulationGames}
        title={'Simulação'}
        background={'black'}
        id="simulation"
        isLoading={isLoadingSimulation}
      />
      <ProductList
        games={fightGames}
        title={'Luta'}
        background={'gray'}
        id="fight"
        isLoading={isLoadingFight}
      />
      <ProductList
        games={rpgGames}
        title={'RPG'}
        background={'black'}
        id="rpg"
        isLoading={isLoadingRpg}
      />
    </>
  )
}

export default Categories
