import userData from '../../fixtures/users/userData.json'
import SignInPage from '../../pages/signInPage.js'
import SignUpPage from '../../pages/signUpPage.js'
import HomePage from '../../pages/homePage.js'
import TransactionHistoryPage from '../../pages/transactionHistoryPage.js'

const signInPage = new SignInPage()
const signUpPage = new SignUpPage()
const homePage = new HomePage()
const transactionHistoryPage = new TransactionHistoryPage()

describe('Histórico de transações - Usuário com transações anteriores', () => {
  it('Exibir histórico de transações do usuário', () => {
    signInPage.logingIn(userData.userSignIn.userSucess.username, userData.userSignIn.userSucess.password)
    homePage.checkHomePage()
    transactionHistoryPage.accessHistoryTab()
    transactionHistoryPage.checkHistory()
  });
});

describe('Histórico de transações - Usuário sem transações anteriores', () => {
  it('Exibir histórico vazio para novo usuário', () => {
    signUpPage.completeRegistration(
      userData.userSignUp.firstName, 
      userData.userSignUp.lastName, 
      userData.userSignUp.username,
      userData.userSignUp.password,
      userData.userSignUp.confirmPassword
    ) // Para esse caso foi necessário cadastrar um novo usuário, pois todos usuários já cadastrados possuem um histórico de transações
    signInPage.logingIn(userData.userSignUp.username, userData.userSignUp.password)
    homePage.checkHomePage()
    homePage.checkOnboardingExists('Tests', '123456234', '122213214')
    transactionHistoryPage.accessHistoryTab()
    transactionHistoryPage.checkEmptyHistory()
  });
});
