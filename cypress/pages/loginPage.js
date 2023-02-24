
class loginPage{



    get emailField() {
        return cy.get('#login-email')
    }

    get emailPassword() {
        return cy.get('#login-password')
    }
    

    get invalidEmailMessage() {
        return cy.get('#parsley-id-5')
    }

    get invalidPwdMessage() {
        return cy.get('#parsley-id-7')
    }

    get loginButton() {
        return cy.get('#login-button')
    }

    get alertMessage() {
        return cy.get('.alertbox')
    }




}

const login = new loginPage();

export default login;