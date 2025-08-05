class SignInPage {
    selectorsList(){
        const selectors = {
            fields : {
                usernameField: "#username",
                passwordField: "#password"
            },

            requireMsg :{
                usernamRequiredMsg: "#username-helper-text",
                passwordRequireMsg: "#password-helper-text",
                failedLoginMessage: ".MuiAlert-message"
            },

            signInButton: ".SignInForm-submit",
            signInForm: ".SignInForm-paper",
            
        }

        return selectors 
    }

    accessSignInPage(){
        cy.visit('http://localhost:3000/signin')
        cy.get(this.selectorsList().signInForm)
    }


    fillLoginForm(username, password){
        username ? cy.get(this.selectorsList().fields.usernameField).type(username) : cy.get(this.selectorsList().fields.usernameField).focus().blur()
        password ? cy.get(this.selectorsList().fields.passwordField).type(password) : cy.get(this.selectorsList().fields.passwordField).focus().blur()
    }

    clickSignInButton(){
        cy.get(this.selectorsList().signInButton).click()
    }

    checkSignInButton(){
        cy.get(this.selectorsList().signInButton).should('be.disabled')
    }

    checkRequireMsg(errorMsg){
        cy.get(this.selectorsList().requireMsg[errorMsg])
    }
}

export default SignInPage