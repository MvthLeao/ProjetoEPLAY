import { InputGroup, Row, TabButton } from './styles'
import { useState } from 'react'
import { useFormik } from 'formik'

import Button from '../../components/Button'
import Card from '../../components/Card'

import boleto from '../../assets/images/boleto.png'
import cartao from '../../assets/images/cartão.png'
import * as Yup from 'yup'

const Checkout = () => {
  const [payWithCard, setPayWithCard] = useState(false)

  const form = useFormik({
    initialValues: {
      //onde chamarei através do htmlFor cada campo do formulário
      fullName: '',
      email: '',
      cpf: '',
      deliveryEmail: '',
      confirmDeliveryEmail: '',
      cardOwner: '',
      cpfCardOwner: '',
      cardDisplayName: '',
      cardNumber: '',
      expiresMonth: '',
      expireYear: '',
      cardCode: '',
      installments: 1
    },
    validationSchema: Yup.object({
      //validação dos primeiros campos obrigatórios
      fullName: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      email: Yup.string()
        .email('E-mail inválido')
        .required('O campo é obrigatório'),
      cpf: Yup.string()
        .min(14, 'O campo precisa ter 14 caracteres')
        .max(14, 'O campo precisa ter 14 caracteres')
        .required('O campo é obrigatório'),
      deliveryEmail: Yup.string()
        .email('E-mail inválido')
        .required('O campo é obrigatório'),
      confirmDeliveryEmail: Yup.string()
        .oneOf([Yup.ref('deliveryEmail')], 'Os e-mails são diferentes')
        .required('O campo é obrigatório'),

      // validação de pagamento
      cardOwner: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatório') : schema
      ),
      cpfCardOwner: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatório') : schema
      ),
      cardDisplayName: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatório') : schema
      ),
      cardNumber: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatório') : schema
      ),
      expiredMonth: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatório') : schema
      ),
      expireyear: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatório') : schema
      ),
      cardCode: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatório') : schema
      ),
      installments: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatório') : schema
      )
    }),

    onSubmit: (values) => {
      //função para submissão do formulário
      console.log(values)
    }
  })

  const getErrorMessage = (fieldName: string, message?: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors

    if (isTouched && isInvalid) return message
    return ''
  }

  return (
    <form onSubmit={form.handleSubmit} className="container">
      <Card title={'Dados de cobrança'}>
        <>
          <Row>
            <InputGroup>
              <label htmlFor="fullName">Nome completo</label>
              <input
                id="fullName"
                type="text"
                name="fullName"
                value={form.values.fullName}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>{getErrorMessage('fullName', form.errors.fullName)}</small>
            </InputGroup>
            <InputGroup>
              <label htmlFor="e-mail">E-mail</label>
              <input
                id="e-mail"
                type="text"
                name="e-mail"
                value={form.values.email}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>{getErrorMessage('e-mail', form.errors.fullName)}</small>
            </InputGroup>
            <InputGroup>
              <label htmlFor="cpf">CPF</label>
              <input
                id="cpf"
                type="text"
                name="cpf"
                value={form.values.cpf}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>{getErrorMessage('cpf', form.errors.fullName)}</small>
            </InputGroup>
          </Row>
          <h3 className="margin-top">Dados de entrega - conteúdo digital</h3>
          <Row>
            <InputGroup>
              <label htmlFor="DeliveryEmail">E-mail</label>
              <input
                id="DeliveryEmail"
                type="text"
                name="DeliveryEmail"
                value={form.values.deliveryEmail}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>
                {getErrorMessage('DeliveryEmail', form.errors.fullName)}
              </small>
            </InputGroup>
            <InputGroup>
              <label htmlFor="ConfirmDeliveryEmail">Confirme o e-mail</label>
              <input
                id="ConfirmDeliveryEmail"
                type="text"
                name="ConfirmDeliveryEmail"
                value={form.values.confirmDeliveryEmail}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>
                {getErrorMessage('ConfirmDeliveryEmail', form.errors.fullName)}
              </small>
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
                    <input
                      id="CardOwner"
                      type="text"
                      name="CardOwner"
                      value={form.values.cardOwner}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                    <small>
                      {getErrorMessage('CardOwner', form.errors.fullName)}
                    </small>
                  </InputGroup>
                  <InputGroup>
                    <label htmlFor="CpfCardOwner">
                      {' '}
                      CPF do titular do cartão
                    </label>
                    <input
                      id="CpfCardOwner"
                      type="text"
                      name="CpfCardOwner"
                      value={form.values.cpfCardOwner}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                    <small>
                      {getErrorMessage('CpfCardOwner', form.errors.fullName)}
                    </small>
                  </InputGroup>
                </Row>
                <Row marginTop="24px">
                  <InputGroup>
                    <label htmlFor="CardDisplayName">Nome no cartão</label>
                    <input
                      id="CardDisplayName"
                      type="text"
                      name="CardDisplayName"
                      value={form.values.cardDisplayName}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                    <small>
                      {getErrorMessage('CardDisplayName', form.errors.fullName)}
                    </small>
                  </InputGroup>
                  <InputGroup>
                    <label htmlFor="CardNumber">Número do cartão</label>
                    <input
                      id="CardNumber"
                      type="text"
                      name="CardNumber"
                      value={form.values.cardNumber}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                    <small>
                      {getErrorMessage('CardNumber', form.errors.fullName)}
                    </small>
                  </InputGroup>
                  <InputGroup maxWidth="123px">
                    <label htmlFor="ExpiresMonth">Mês do vencimento</label>
                    <input
                      id="ExpiresMonth"
                      type="text"
                      name="ExpiresMonth"
                      value={form.values.expiresMonth}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                    <small>
                      {getErrorMessage('ExpiresMonth', form.errors.fullName)}
                    </small>
                  </InputGroup>
                  <InputGroup maxWidth="123px">
                    <label htmlFor="ExpireYear">Ano de vencimento</label>
                    <input
                      id="ExpireYear"
                      type="text"
                      name="ExpireYear"
                      value={form.values.expireYear}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                    <small>
                      {getErrorMessage('ExpireYear', form.errors.fullName)}
                    </small>
                  </InputGroup>
                  <InputGroup maxWidth="48px">
                    <label htmlFor="CardCode">CVV</label>
                    <input
                      id="CardCode"
                      type="text"
                      name="CardCode"
                      value={form.values.cardCode}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                    <small>
                      {getErrorMessage('CardCode', form.errors.fullName)}
                    </small>
                  </InputGroup>
                </Row>
                <Row marginTop="24px">
                  <InputGroup maxWidth="150px">
                    <label htmlFor="Installments">Parcelamento</label>
                    <select
                      id="installments"
                      name="Installments"
                      value={form.values.installments}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    >
                      <option>1x de R$ 200,00</option>
                      <option>2x de R$ 200,00</option>
                      <option>3x de R$ 200,00</option>
                    </select>
                    <small>
                      {getErrorMessage('Installments', form.errors.fullName)}
                    </small>
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
    </form>
  )
}

export default Checkout
