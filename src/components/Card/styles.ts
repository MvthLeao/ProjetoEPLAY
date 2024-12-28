import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.div`
  background-color: ${cores.cinza};
  border-radius: 8px;
  padding: 24px;
  margin-bottom: 40px;

  h2,
  h3 {
    font-size: 18px;
    font-weight: bold;
    color: ${cores.branca};
    margin-bottom: 24px;
  }

  .margin-top {
    margin-top: 24px;
  }

  p {
    font-size: 14px;
    line-height: 22px;
  }
`
