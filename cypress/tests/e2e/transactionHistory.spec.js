import userData from '../../fixtures/users/userData.json'
import SignInPage from '../../pages/signInPage.js'
import SignUpPage from '../../pages/signUpPage.js'
import HomePage from '../../pages/homePage.js'
import TransactionHistoryPage from '../../pages/transactionHistoryPage.js'

const signInPage = new SignInPage()
const signUpPage = new SignUpPage()
const homePage = new HomePage()
const transactionHistoryPage = new TransactionHistoryPage()

describe('View transaction history', () => {
  it('Displays user transaction history', () => {
    signInPage.logingIn(userData.userSignIn.userSucess.username, userData.userSignIn.userSucess.password)
    homePage.checkHomePage()
    transactionHistoryPage.accessHistoryTab()
    transactionHistoryPage.checkHistory()
  });
});

describe('View transaction history with no previous transactions', () => {
  it('Displays empty user transaction history', () => {
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
