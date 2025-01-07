import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Banner = styled.div`
  position: relative;
  display: block;
  height: 480px;
  width: 100%;

  background-repeat: no-repeat; /* para não se repetir */
  background-position: center; /* alinhando ao centro */
  background-size: 100%; /* ocupando 100% do width */

  padding-top: 16px;

  @media (max-width: ${breakpoints.tablet}) {
    background-size: cover;
  }

  /* adicionando opacidade */
  &::after {
    position: absolute;
    background-color: ${colors.black};
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    content: '';
    opacity: 56%;
  }

  ${TagContainer} {
    margin-right: 8px;
  }

  /* adicionando conteudo que está dentro do container em primeira camada */
  .container {
    z-index: 1;
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
  }
`
export const Infos = styled.div`
  padding: 16px;
  background-color: ${colors.black};
  max-width: 290px;
  font-weight: bold;

  /* Utilizando recurso para otimizar processo */
  h2 {
    font-size: 32px;
  }

  p {
    font-size: 18px;
    margin: 16px 0;
  }

  span {
    display: block;
    text-decoration: line-through;
  }

  button {
    cursor: pointer;
  }
`
