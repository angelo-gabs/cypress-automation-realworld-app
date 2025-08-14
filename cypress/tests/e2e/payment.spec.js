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

describe('Send money with sufficient balance', () => {
  it('Should successfully send money', () => {
    transactionPage.chooseTransactionContact('kristianBradtke')
    transactionPage.fillTransactionFields(
      userTransactionData.transactionSuccess.amountToSend,
      userTransactionData.transactionSuccess.note
    )
    transactionPage.validateBalanceUpdate(userTransactionData.transactionSuccess.amountToSend) 
  })
})

describe('Send money with insufficient balance', () => {
  it.skip('Should display an error message when sending money with insufficient balance', () => {
    transactionPage.chooseTransactionContact('darrelOrtiz')
    transactionPage.fillTransactionFields(
      userTransactionData.transactionFail.amountToSend,
      userTransactionData.transactionFail.note
    )
    transactionPage.validateBalanceUpdate(userTransactionData.transactionSuccess.amountToSend) 
    // Bug encontrado: Site permite a transação de um valor maior do que você possui em conta
  })
})

describe('Make transaction with empty fields', () => {
  afterEach(() => {
    transactionPage.checkPaymentButton()
  })

  it('Transaction with all fields empty', () => {
    transactionPage.chooseTransactionContact('ruthieProsacco')
    transactionPage.fillTransactionFields('', '')
    transactionPage.checkRequireMsg('amountRequireMsg')
    transactionPage.checkRequireMsg('addNoteRequireMsg')
  })

  it('Transaction with empty amount field', () => {
    transactionPage.chooseTransactionContact('ruthieProsacco')
    transactionPage.fillTransactionFields('', userTransactionData.transactionFail.note)
    transactionPage.checkRequireMsg('amountRequireMsg')
  })

  it('Transaction with empty add note field', () => {
    transactionPage.chooseTransactionContact('ruthieProsacco')
    transactionPage.fillTransactionFields(userTransactionData.transactionFail.amountToSend, '')
    transactionPage.checkRequireMsg('addNoteRequireMsg')
  })
})
