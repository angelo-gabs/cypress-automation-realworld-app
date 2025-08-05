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

    focusBlurField(field){
        cy.get(field).focus().blur()
    }

    registerNewUser(firstName, lastName, username, password, confirmPassword){
        firstName ? cy.get(this.selectorsList().fields.firstNameField).type(firstName): focusBlurField(this.selectorsList().fields.firstNameField)
        lastName ? cy.get(this.selectorsList().fields.lastNameField).type(lastName): focusBlurField(this.selectorsList().fields.lastNameField)
        username ? cy.get(this.selectorsList().fields.usernameField).type(username): focusBlurField(this.selectorsList().fields.usernameField)
        password ? cy.get(this.selectorsList().fields.passwordField).type(password): focusBlurField(this.selectorsList().fields.passwordField)
        confirmPassword ? cy.get(this.selectorsList().fields.confirmPasswordField).type(confirmPassword): focusBlurField(this.selectorsList().fields.confirmPasswordField)
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