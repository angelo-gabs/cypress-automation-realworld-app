import userData from '../../fixtures/users/userData.json'
import SignInPage from '../../pages/signInPage.js'
import HomePage from '../../pages/homePage.js'
import TransactionPage from '../../pages/transactionPage.js'

const signInPage = new SignInPage()
const homePage = new HomePage()
const transactionPage = new TransactionPage()

describe('Enviar dinheiro com saldo suficiente', () => {
  it('Deve enviar dinheiro com sucesso', () => {
    signInPage.accessSignInPage()
    signInPage.loginWithValidCredentials(userData.userSignIn.userSucess.username,userData.userSignIn.userSucess.password)
    homePage.accessTransactionPage()
    transactionPage.checkTransactionPage()
  });
});