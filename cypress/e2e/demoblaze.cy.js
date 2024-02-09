import DemoblazePage from "../page/demoblaze";

describe('Demoblaze tests', () => {

    beforeEach(() => {
        DemoblazePage.visit();
    })

    context('signup', () => {
        it('signup without username', () => {
            DemoblazePage.clickOptionSignup();
            DemoblazePage.typeSignupUsername(Cypress.env('username'));
            DemoblazePage.clickSignup();
            cy.on('window:alert',(txt)=>{
                expect(txt).to.contains('Please fill out Username and Password.');
            })
        })
    
        it('signup without password', () => {
            DemoblazePage.clickOptionSignup();
            DemoblazePage.typeSignupPassword(Cypress.env('password'));
            DemoblazePage.clickSignup();
            cy.on('window:alert',(txt)=>{
                expect(txt).to.contains('Please fill out Username and Password.');
            })
        })
    
        it('signup sucess', () => {
            DemoblazePage.clickOptionSignup();
            DemoblazePage.typeSignupUsername(Cypress.env('username'));
            DemoblazePage.typeSignupPassword(Cypress.env('password'));
            DemoblazePage.clickSignup();
            cy.on('window:alert',(txt)=>{
                expect(txt).to.contains('Sign up successful.');
            })
        })
    
        it('signup already exist', () => {
            DemoblazePage.clickOptionSignup();
            DemoblazePage.typeSignupUsername(Cypress.env('username'));
            DemoblazePage.typeSignupPassword(Cypress.env('password'));
            DemoblazePage.clickSignup();
            cy.on('window:alert',(txt)=>{
                expect(txt).to.contains('This user already exist.');
            })
        })
    }),
    context('login', () => {    
        it('login with invalid user', () => {
            DemoblazePage.clickOptionLogin();
            DemoblazePage.clickLogin();
            cy.on('window:alert',(txt)=>{
                expect(txt).to.not.contains();
            })
        })
    
        it('login sucess', () => {
            DemoblazePage.clickOptionLogin();
            DemoblazePage.typeLoginUsername(Cypress.env('username'));
            DemoblazePage.typeLoginPassword(Cypress.env('password'));
            DemoblazePage.clickLogin();
            DemoblazePage.checkLogin();
        })
    }),
    context('login', () => {    
        it('logout sucess', () => {
            DemoblazePage.clickOptionLogin();
            DemoblazePage.typeLoginUsername(Cypress.env('username'));
            DemoblazePage.typeLoginPassword(Cypress.env('password'));
            DemoblazePage.clickLogin();
            DemoblazePage.checkLogin();
            DemoblazePage.clickLogout();
            DemoblazePage.checkLogout();
        })
    })
    
})