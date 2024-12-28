import { InputGroup, Row, TabButton } from './styles'
import { useState } from 'react'

import Button from '../../components/Button'
import Card from '../../components/Card'

import boleto from '../../assets/images/boleto.png'
import cartao from '../../assets/images/cartão.png'

const Checkout = () => {
  const [payWithCard, setPayWithCard] = useState(false)

  return (
    <div className="container">
      <Card title={'Dados de cobrança'}>
        <>
          <Row>
            <InputGroup>
              <label htmlFor="fullName">Nome completo</label>
              <input id="fullName" type="text" />
            </InputGroup>
            <InputGroup>
              <label htmlFor="e-mail">E-mail</label>
              <input id="e-mail" type="text" />
            </InputGroup>
            <InputGroup>
              <label htmlFor="cpf">CPF</label>
              <input id="cpf" type="text" />
            </InputGroup>
          </Row>
          <h3 className="margin-top">Dados de entrega - conteúdo digital</h3>
          <Row>
            <InputGroup>
              <label htmlFor="DeliveryEmail">E-mail</label>
              <input id="DeliveryEmail" type="text" />
            </InputGroup>
            <InputGroup>
              <label htmlFor="ConfirmDeliveryEmail">Confirme o e-mail</label>
              <input id="ConfirmDeliveryEmail" type="text" />
            </InputGroup>
          </Row>
        </>
      </Card>
      <Card title="pagamento">
        <>
          <TabButton
            isActive={!payWithCard}
            onClick={() => setPayWithCard(false)}
          >
            <img src={boleto} alt="boleto" />
            Boleto bancário
          </TabButton>
          <TabButton
            isActive={payWithCard}
            onClick={() => setPayWithCard(true)}
          >
            <img src={cartao} alt="cartão" />
            Cartão de crédito
          </TabButton>
          <div className="margin-top">
            {payWithCard ? (
              <>
                <Row>
                  <InputGroup>
                    <label htmlFor="CardOwner">
                      {' '}
                      Nome do titular do cartão
                    </label>
                    <input id="CardOwner" type="text" />
                  </InputGroup>
                  <InputGroup>
                    <label htmlFor="CpfCardOwner">
                      {' '}
                      CPF do titular do cartão
                    </label>
                    <input id="CpfCardOwner" type="text" />
                  </InputGroup>
                </Row>
                <Row marginTop="24px">
                  <InputGroup>
                    <label htmlFor="CardDisplayName">Nome no cartão</label>
                    <input id="CardDisplayName" type="text" />
                  </InputGroup>
                  <InputGroup>
                    <label htmlFor="CardNumber">Número do cartão</label>
                    <input id="CardNumber" type="text" />
                  </InputGroup>
                  <InputGroup maxWidth="123px">
                    <label htmlFor="ExpiresMonth">Mês do vencimento</label>
                    <input id="ExpiresMonth" type="text" />
                  </InputGroup>
                  <InputGroup maxWidth="123px">
                    <label htmlFor="ExpireYear">Ano de vencimento</label>
                    <input id="ExpireYear" type="text" />
                  </InputGroup>
                  <InputGroup maxWidth="48px">
                    <label htmlFor="CardCode">CVV</label>
                    <input id="CardCode" type="text" />
                  </InputGroup>
                </Row>
                <Row marginTop="24px">
                  <InputGroup maxWidth="150px">
                    <label htmlFor="Installments">Parcelamento</label>
                    <select>
                      <option>1x de R$ 200,00</option>
                      <option>2x de R$ 200,00</option>
                      <option>3x de R$ 200,00</option>
                    </select>
                  </InputGroup>
                </Row>
              </>
            ) : (
              <p>
                Ao optar por essa forma de pagamento, é importante lembrar que a
                confirmação pode levar até 3 dias úteis, devido aos prazos
                estabelecidos pelas instituições financeiras. Portanto, a
                liberação do código de ativação do jogo adquirido ocorrerá
                somente após a aprovação do pagamento do boleto.
              </p>
            )}
          </div>
        </>
      </Card>
      <Button type="button" title="Clique aqui para finalizar a compra">
        Finalizar compra
      </Button>
    </div>
  )
}

export default Checkout
