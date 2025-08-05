class SignUpPage{
   selectorsList(){
        const selectors = {
            fields: {
                firstNameField: "#firstName",
                lastNameField: "#lastName",
                usernameField: "#username",
                passwordField: "#password",
                confirmPasswordField: "#confirmPassword"
            }
            ,

            requireMsg: {
                firstNameRequiredMsg: "#firstName-helper-text",
                lastNameRequiredMsg: "#lastName-helper-text",
                usernameRequiredMsg: "#username-helper-text",
                passwordRequiredMsg: "#password-helper-text",
                confirmPaswordRequireMsg: "#confirmPassword-helper-text"
            },

            signUpButton: ".SignUpForm-submit",
            signUpForm: ".SignUpForm-paper",

        }

        return selectors 
    }

    acessSignUpPage(){
        cy.visit('http://localhost:3000/signup')
        cy.get(this.selectorsList().signUpForm)
    }

     registerNewUser(firstName, lastName, username, password, confirmPassword){
        firstName ? cy.get(this.selectorsList().fields.firstNameField).type(firstName): cy.get(this.selectorsList().fields.firstNameField).focus().blur()
        lastName ? cy.get(this.selectorsList().fields.lastNameField).type(lastName): cy.get(this.selectorsList().fields.lastNameField).focus().blur()
        username ? cy.get(this.selectorsList().fields.usernameField).type(username): cy.get(this.selectorsList().fields.usernameField).focus().blur()
        password ? cy.get(this.selectorsList().fields.passwordField).type(password): cy.get(this.selectorsList().fields.passwordField).focus().blur()
        confirmPassword ? cy.get(this.selectorsList().fields.confirmPasswordField).type(confirmPassword): cy.get(this.selectorsList().fields.confirmPasswordField).focus().blur()
    }


    checkRequireMsg(errorMsg){
        cy.get(this.selectorsList().requireMsg[errorMsg])
    }

    clickSignUpButton(){
        cy.get(this.selectorsList().signUpButton).click()
    }
    
    checkSignUpButton(){
        cy.get(this.selectorsList().signUpButton).should('be.disabled')
    }

    checkUrl(url){
        cy.url().should('eq', `${url}`)
    }

   
}

export default SignUpPage