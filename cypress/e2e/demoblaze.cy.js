import DemoblazePage from "../page/demoblaze";
import CartPage from "../page/demoblaze-cart";
const { faker } = require("@faker-js/faker");

const user = {
    username: faker.internet.userName(),
    password: faker.internet.password(),
    name: faker.person.firstName(),
    country: faker.location.country(),
    city: faker.location.city(),
    card: faker.finance.creditCardNumber(),
    month: faker.date.month(),
    year: 2024
};

describe('Demoblaze tests', () => {

    beforeEach(() => {
        DemoblazePage.visit();
    });

    context('signup', () => {

        it('signup without username', () => {
            DemoblazePage.clickOptionSignup();
            DemoblazePage.typeSignupUsername(user.username);
            DemoblazePage.clickSignup();
            cy.on('window:alert',(txt)=>{
                expect(txt).to.contains('Please fill out Username and Password.');
            })
        });
    
        it('signup without password', () => {
            DemoblazePage.clickOptionSignup();
            DemoblazePage.typeSignupPassword(user.password);
            DemoblazePage.clickSignup();
            cy.on('window:alert',(txt)=>{
                expect(txt).to.contains('Please fill out Username and Password.');
            })
        });
    
        it('signup sucess', () => {
            cy.signup(user.username, user.password);
            cy.on('window:alert',(txt)=>{
                expect(txt).to.contains('Sign up successful.');
            })
        });
    
        it('signup already exist', () => {
            cy.signup(user.username, user.password);
            cy.on('window:alert',(txt)=>{
                expect(txt).to.contains('This user already exist.');
            })
        });
    }),

    context('login', () => {    

        it('login with invalid user', () => {
            DemoblazePage.clickOptionLogin();
            DemoblazePage.clickLogin();
            cy.get('#nameofuser').should('not.be.visible');
        });
    
        it('login sucess', () => {
            cy.login(user.username, user.password);
            cy.get('#nameofuser').should('exist');
        });
    }),

    context('logout', () => {   

        it('logout sucess', () => {
            cy.login(user.username, user.password);
            cy.get('#nameofuser').should('not.be.visible');
        });
    }),

    context('place order', () => {    

        it('cart sucess', () => {
            cy.login(user.username, user.password);
            cy.get('#nameofuser').should('exist');
            cy.addPhone('Nexus 6');
            DemoblazePage.clickOptionHome();
            cy.addPhone('Sony vaio i5')
            DemoblazePage.clickOptionCart();
            CartPage.deleteProduct();
            cy.fillPlaceOrder(user.name, user.country, user.city, user.card, user.month, user.year);
            cy.contains('Thank you for your purchase!');
        });
    });
    
});