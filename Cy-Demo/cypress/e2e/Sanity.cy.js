import { LoginPage } from "./pages/login_page"
const loginPage = new LoginPage()

describe('All Test Cases', function(){ //grouping the functions
    
        
     this.beforeEach(function() {
        cy.visit('https://opensource-demo.orangehrmlive.com')
        loginPage.enterUsername('admin')
        loginPage.enterPassword('admin123')
        loginPage.clickLogin()
    })
    it('Admin', function(){
        
        
        //cy.wait(7000)
        
        cy.contains('Admin').click()
        
        
       /*     try {
            cy.get('.oxd-table-filter-header-title > .oxd-text').click()
           } catch (error) {
            cy.get(':nth-child(2) > .oxd-main-menu-item').click()
           } 
      */   
        
        
    })
    it('PIM',function(){
        cy.wait(7000)
        cy.contains('PIM').click()
        
    })
    it('Leave', function(){
        cy.get(':nth-child(3) > .oxd-main-menu-item').click()
        
    })

    it('Time',function(){
        cy.get(':nth-child(4) > .oxd-main-menu-item').click()
        
    })
    it('Rec',function(){
        cy.get(':nth-child(5) > .oxd-main-menu-item').click()
        cy.get(':nth-child(6) > .oxd-main-menu-item').click()
        cy.get(':nth-child(7) > .oxd-main-menu-item').click()
        cy.get(':nth-child(9) > .oxd-main-menu-item').click()
        cy.get(':nth-child(10) > .oxd-main-menu-item').click()
        cy.get(':nth-child(11) > .oxd-main-menu-item').click()
    })
    
})    