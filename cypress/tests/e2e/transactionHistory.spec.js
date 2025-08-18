import userData from '../../fixtures/users/userData.json'
import SignInPage from '../../pages/signInPage.js'
import SignUpPage from '../../pages/signUpPage.js'
import HomePage from '../../pages/homePage.js'
import TransactionHistoryPage from '../../pages/transactionHistoryPage.js'


const signInPage = new SignInPage()
const signUpPage = new SignUpPage()
const homePage = new HomePage()
const transactionHistoryPage = new TransactionHistoryPage()

describe.skip('Visualizar histórico de transações com sucesso', () => {
  it('Deve exibir o histórico de transações de um usuário corretamente', () => {
    signInPage.logingIn(userData.userSignIn.userSucess.username, userData.userSignIn.userSucess.password)
    homePage.checkHomePage()
    transactionHistoryPage.accessHistoryTab()
    transactionHistoryPage.checkHistory()
  });
});

describe('Tentar visualizar o histórico de transações sem transações anteriores', () => {
  it('Deve exibir uma mensagem indicando que o usuário não possui transações anteriores', () => {
    signUpPage.completeRegistration(
      userData.userSignUp.firstName, 
      userData.userSignUp.lastName, 
      userData.userSignUp.username, // gerar um aleatório
      userData.userSignUp.password,
      userData.userSignUp.confirmPassword
    )
    signInPage.logingIn(userData.userSignUp.username, userData.userSignUp.password)
    homePage.checkHomePage()
    homePage.checkOnboardingExists('Tests', '123456234', '122213214') // arrumar aqui
    transactionHistoryPage.accessHistoryTab()
    transactionHistoryPage.checkEmptyHistory()
  });
});

