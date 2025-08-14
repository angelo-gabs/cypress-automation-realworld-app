import userData from '../../fixtures/users/userData.json'
import SignInPage from '../../pages/signInPage.js'
import HomePage from '../../pages/homePage.js'
import TransactionHistoryPage from '../../pages/transactionHistoryPage.js'

const signInPage = new SignInPage()
const homePage = new HomePage()
const transactionHistoryPage = new TransactionHistoryPage()

describe('Visualizar histórico de transações com sucesso', () => {
  it('Deve exibir o histórico de transações de um usuário corretamente', () => {
    signInPage.logingIn(userData.userSignIn.userSucess.username, userData.userSignIn.userSucess.password)
    homePage.checkHomePage()
    transactionHistoryPage.accessHistoryTab()
    transactionHistoryPage.checkHistory('be.visible')
  });
});

describe.skip('Tentar visualizar o histórico de transações sem transações anteriores', () => {
  it('Deve exibir uma mensagem indicando que o usuário não possui transações anteriores', () => {
    // Implemente os passos do caso de teste aqui
  });
});