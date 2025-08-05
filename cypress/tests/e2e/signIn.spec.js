import userData from '../../fixtures/users/userData.json'
import SignInPage from '../../pages/signInPage.js'
import HomePage from '../../pages/homePage.js'

const signInPage = new SignInPage()
const homePage = new HomePage()

describe('Successful login', () => {

  it('Login with valid username and password', () => {
    signInPage.accessSignInPage()
    signInPage.fillLoginForm(userData.userSignIn.userSucess.username, userData.userSignIn.userSucess.password)
    signInPage.clickSignInButton()
    homePage.checkHomePage()
  });
});

describe('Failed login', () => {
  beforeEach(() => {
    signInPage.accessSignInPage()
  })
  
  it('Login with invalid username and valid password', () => {
    signInPage.fillLoginForm(userData.userSignIn.userFail.username, userData.userSignIn.userSucess.password)
    signInPage.clickSignInButton()
    signInPage.checkRequireMsg('failedLoginMessage')
  })

  it('Login with valid username and invalid password', () => {
    signInPage.fillLoginForm(userData.userSignIn.userSucess.username, userData.userSignIn.userFail.password)
    signInPage.clickSignInButton()
    signInPage.checkRequireMsg('failedLoginMessage')
  })

  it('Login with invalid username and invalid password', () => {
    signInPage.fillLoginForm(userData.userSignIn.userFail.username, userData.userSignIn.userFail.password)
    signInPage.clickSignInButton()
    signInPage.checkRequireMsg('failedLoginMessage')
  })

  it('Login with empty username and password fields', () => {
    signInPage.fillLoginForm('', '')
    signInPage.checkRequireMsg('usernamRequiredMsg')
    //Na página de login não é exibido nenhuma mensagem de erro quando o campo de senha é deixado em branco
    signInPage.checkSignInButton()
  })

  it('Login with empty username field', () => {
    signInPage.fillLoginForm('', userData.userSignIn.userSucess.password)
    signInPage.checkRequireMsg('usernamRequiredMsg')
    signInPage.checkSignInButton()
  })

  it('Login with empty password field', () => {
    signInPage.fillLoginForm(userData.userSignIn.userSucess.username, '')
    //Na página de login não é exibido nenhuma mensagem de erro quando o campo de senha é deixado em branco
    signInPage.checkSignInButton()
  })

  it('Login with password shorter than 4 characters', () => {
    signInPage.fillLoginForm(userData.userSignIn.userSucess.username, userData.shortPassword)
    signInPage.checkRequireMsg( 'passwordRequireMsg')
    signInPage.checkSignInButton()
  })

  
})
