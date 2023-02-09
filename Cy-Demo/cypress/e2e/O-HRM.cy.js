import { LoginPage } from "./pages/login_page"
const loginPage = new LoginPage()

describe('All Test Cases', function(){ //grouping the functions
    this.beforeEach(function() // runs this function before all test cases within this file
        {
            cy.visit('https://opensource-demo.orangehrmlive.com')
    })
    it('Login Test 1', function(){

        
        loginPage.enterUsername('admin')
        loginPage.enterPassword('admin123')
        loginPage.clickLogin()
        cy.get('.oxd-userdropdown-name').click()
        //cy.get(':nth-child(4) > .oxd-userdropdown-link').click()

    })
      it.skip('Login Test 2', function(){
        loginPage.enterUsername('adm5in9951')
        loginPage.enterPassword('admin1231222')
        loginPage.clickLogin()    
        //cy.get('.oxd-alert-content > .oxd-text')
        cy.get('.oxd-userdropdown-name').click()
    })  
})