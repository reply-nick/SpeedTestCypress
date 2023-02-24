
import login from "../pages/loginPage"

describe('Validate the login', () => {
  beforeEach(() => {
    cy.visit('https://www.speedtest.net/login')
    
  })

  it('Check error for invalid email', () => {
    
    const invalidEmailData = ['missingAtEmail.com',
                              'no@periodcom',
                              'junk#@%^%#$@#$@#@email.com',
                              '@missingUsername.com',
                              '.dot@infront.com',
                              'two@dots..com',
                              'dashAfter@-email.com'];
            
    cy.wrap(invalidEmailData).each(invalidEmail => {
      login.emailField.clear();
      login.emailField.type(invalidEmail);
      login.emailPassword.click();
      login.invalidEmailMessage.should('be.visible')
      login.invalidEmailMessage.should('have.text', 'This value should be a valid email.')
    })
  })

  it('Check error not present for valid email', () => {
      login.emailField.clear();
      login.emailField.type('valid@email.com');
      login.emailPassword.click();
      login.invalidEmailMessage.should('not.exist')
  })
})