import userData from '../../fixtures/users/userData.json'
import userTransactionData from '../../fixtures/users/userTransactionData.json'
import SignInPage from '../../pages/signInPage.js'
import HomePage from '../../pages/homePage.js'
import TransactionPage from '../../pages/transactionPage.js'

const signInPage = new SignInPage()
const homePage = new HomePage()
const transactionPage = new TransactionPage()

beforeEach(() => {
  signInPage.logingIn(userData.userSignIn.userSucess.username, userData.userSignIn.userSucess.password)
  homePage.checkHomePage()
  homePage.accessTransactionPage()
  transactionPage.checkTransactionPage()
})

describe('Transação - Envio de dinheiro com saldo suficiente', () => {
  it('Enviar dinheiro com sucesso para um contato válido', () => {
    transactionPage.chooseTransactionContact('kristianBradtke')
    transactionPage.fillTransactionFields(
      userTransactionData.transactionSuccess.amountToSend,
      userTransactionData.transactionSuccess.note
    )
    transactionPage.validateBalanceUpdate(userTransactionData.transactionSuccess.amountToSend) 
  })
})

describe('Transação - Envio de dinheiro com saldo insuficiente', () => {
  it('Tentar enviar dinheiro com valor maior que o saldo disponível', () => {
    transactionPage.chooseTransactionContact('darrelOrtiz')
    transactionPage.fillTransactionFields(
      userTransactionData.transactionFail.amountToSend,
      userTransactionData.transactionFail.note
    )
    transactionPage.validateBalanceUpdate(userTransactionData.transactionSuccess.amountToSend) 
    // Bug encontrado: Site permite a transação de um valor maior do que você possui em conta
  })
})

describe('Transação - Validação de campos obrigatórios vazios', () => {
  afterEach(() => {
    transactionPage.checkPaymentButton()
  })

  it('Realizar transação com todos os campos vazios', () => {
    transactionPage.chooseTransactionContact('ruthieProsacco')
    transactionPage.fillTransactionFields('', '')
    transactionPage.checkRequireMsg('amountRequireMsg')
    transactionPage.checkRequireMsg('addNoteRequireMsg')
  })

  it('Realizar transação com campo de valor vazio', () => {
    transactionPage.chooseTransactionContact('ruthieProsacco')
    transactionPage.fillTransactionFields('', userTransactionData.transactionFail.note)
    transactionPage.checkRequireMsg('amountRequireMsg')
  })

  it('Realizar transação com campo de nota vazio', () => {
    transactionPage.chooseTransactionContact('ruthieProsacco')
    transactionPage.fillTransactionFields(userTransactionData.transactionFail.amountToSend, '')
    transactionPage.checkRequireMsg('addNoteRequireMsg')
  })
})
