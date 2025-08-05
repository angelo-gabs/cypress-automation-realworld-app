import userData from '../../fixtures/users/userData.json'
import SignUpPage from '../../pages/signUpPage'

const signUpPage = new SignUpPage()

describe('Sucessful Registration', () => {
    it('Register a new user with valid information', () => {
        signUpPage.acessSignUpPage()
        signUpPage.registerNewUser(
            userData.userSignUp.firstName, 
            userData.userSignUp.lastName, 
            userData.userSignUp.username, 
            userData.userSignUp.password,
            userData.userSignUp.confirmPassword
        )
        signUpPage.clickSignUpButton()
        signUpPage.checkUrl('http://localhost:3000/signin')
    })
})

describe('Failed Registration', () => {
    beforeEach(() => {
        signUpPage.acessSignUpPage()
    })

    afterEach(() => {
        signUpPage.checkSignUpButton()
    })


    it('Register a new user with all fields empty', () => {
        signUpPage.registerNewUser()
        const requireMsgs = signUpPage.selectorsList().requireMsg
        for(let erroMsg in requireMsgs){
            signUpPage.checkRequireMsg(erroMsg)
        }
    })

    it('Register a new user with the "first name" field empty', () => {
        signUpPage.registerNewUser(
            '',
            userData.userSignUp.lastName, 
            userData.userSignUp.username, 
            userData.userSignUp.password, 
            userData.userSignUp.confirmPassword
        )
        signUpPage.checkRequireMsg('firstNameRequiredMsg')
    })

    it('Register a new user with the "last name" field empty', () => {
        signUpPage.registerNewUser(
            userData.userSignUp.firstName,
            '', 
            userData.userSignUp.username, 
            userData.userSignUp.password, 
            userData.userSignUp.confirmPassword
        )
        signUpPage.checkRequireMsg('lastNameRequiredMsg')
    })

    it('Register a new user with the "username" field empty', () => {
        signUpPage.registerNewUser(
            userData.userSignUp.firstName, 
            userData.userSignUp.lastName, 
            '', 
            userData.userSignUp.password, 
            userData.userSignUp.confirmPassword
        )
        signUpPage.checkRequireMsg('usernameRequiredMsg')
    })

    it('Register a new user with the "password" field empty', () => {
        signUpPage.registerNewUser(
            userData.userSignUp.firstName, 
            userData.userSignUp.lastName, 
            userData.userSignUp.username, 
            '', 
            userData.userSignUp.confirmPassword
        )
        signUpPage.checkRequireMsg('passwordRequiredMsg')
    })

    it('Register a new user with the "confirm password" field empty', () => {
        signUpPage.registerNewUser(
            userData.userSignUp.firstName, 
            userData.userSignUp.lastName, 
            userData.userSignUp.username, 
            userData.userSignUp.password,
            '' 
        )
        signUpPage.checkRequireMsg('confirmPaswordRequireMsg')
    })

    it('Register a new user with a password containing less than 4 characters', () => {
        signUpPage.registerNewUser(
            userData.userSignUp.firstName, 
            userData.userSignUp.lastName, 
            userData.userSignUp.username, 
            userData.shortPassword,
            userData.userSignUp.confirmPassword
        )
        signUpPage.checkRequireMsg('passwordRequiredMsg')
    })

    it.skip('Register a new user with an already registered "username"', () => {
        signUpPage.registerNewUser(
            userData.userSignUp.firstName, 
            userData.userSignUp.lastName, 
            userData.userSignIn.userSucess.username, 
            userData.userSignUp.password,
            userData.userSignUp.confirmPassword
        )

    })
})
