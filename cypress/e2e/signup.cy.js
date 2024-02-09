import DemoblazePage from "../page/demoblaze";

describe('signup spec', () => {

    beforeEach(() => {
        DemoblazePage.visit();
    })

    it('signup without username', () => {
        DemoblazePage.clickSignup();
        DemoblazePage.typeUsername(Cypress.env('username'));
        DemoblazePage.clickBtnSignup();
        cy.on('window:alert',(txt)=>{
            expect(txt).to.contains('Please fill out Username and Password.');
        })

    })

    it('signup without password', () => {
        DemoblazePage.clickSignup();
        DemoblazePage.typePassword(Cypress.env('password'));
        DemoblazePage.clickBtnSignup();
        cy.on('window:alert',(txt)=>{
            expect(txt).to.contains('Please fill out Username and Password.');
        })
        
    })

    it('signup sucess', () => {
        DemoblazePage.clickSignup();
        DemoblazePage.typeUsername(Cypress.env('username'));
        DemoblazePage.typePassword(Cypress.env('password'));
        DemoblazePage.clickBtnSignup();
        cy.on('window:alert',(txt)=>{
            expect(txt).to.contains('Sign up successful.');
        })
    })

    it('signup already exist', () => {
        DemoblazePage.clickSignup();
        DemoblazePage.typeUsername(Cypress.env('username'));
        DemoblazePage.typePassword(Cypress.env('password'));
        DemoblazePage.clickBtnSignup();
        cy.on('window:alert',(txt)=>{
            expect(txt).to.contains('This user already exist.');
        })
    })
})