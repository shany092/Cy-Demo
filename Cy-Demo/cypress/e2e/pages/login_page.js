export class LoginPage {

    //
    username_textBox = ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'
    pwd = ':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input'
    login_btn = '.oxd-button'

    
    enterUsername(aaa) {
        cy.get(this.username_textBox).type(aaa);
    }
    enterPassword(password) {
        cy.get(this.pwd).type(password);
    }

    clickLogin(login_btn) {
        cy.get(this.login_btn).click();
    }

}