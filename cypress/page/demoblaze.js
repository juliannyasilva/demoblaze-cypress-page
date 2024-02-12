const OPTION_SIGNUP = '#signin2';
const OPTION_LOGIN = '#login2';
const BTN_SIGNUP_CLOSE = '#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-secondary';
const BTN_SIGNUP = '#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary';
const FIELD_SIGNUP_USERNAME = '#sign-username';
const FIELD_SIGNUP_PASSWORD = '#sign-password';
const FIELD_LOGIN_USERNAME = '#loginusername';
const FIELD_LOGIN_PASSWORD = '#loginpassword';
const BTN_LOGIN_CLOSE = '#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-secondary';
const BTN_LOGIN = '#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary';
const OPTION_LOGOUT = '#logout2';
const OPTION_CATEGORIE_PHONE = 'Phones';
const BTN_ADD_TO_CART = '.col-sm-12 > .btn';
const OPTION_HOME = '.active > .nav-link';
const OPTION_CART = '#cartur';

class DemoblazePage {

    static visit() {
        cy.visit('/');
    }

    static clickOptionSignup() {
        cy.get(OPTION_SIGNUP).click();
    }

    static typeSignupUsername(username) {
        cy.get(FIELD_SIGNUP_USERNAME).type(username);
    }

    static typeSignupPassword(password) {
        cy.get(FIELD_SIGNUP_PASSWORD).type(password);
    }

    static clickSignupClose() {
        cy.get(BTN_SIGNUP_CLOSE).click();
    }

    static clickSignup() {
        cy.get(BTN_SIGNUP).click();
    }

    static clickOptionLogin() {
        cy.get(OPTION_LOGIN).click();
    }

    static typeLoginUsername(username) {
        cy.get(FIELD_LOGIN_USERNAME).type(username);
    }

    static typeLoginPassword(password) {
        cy.get(FIELD_LOGIN_PASSWORD).type(password);
    }

    static clickLoginClose() {
        cy.get(BTN_LOGIN_CLOSE).click();
    }

    static clickLogin() {
        cy.get(BTN_LOGIN).click();
    }

    static clickLogout() {
        cy.get(OPTION_LOGOUT).click();
    }

    static clickCategoriePhones() {
        cy.contains(OPTION_CATEGORIE_PHONE).click();
    }

    static clickPhone(name) {
        cy.contains(name).click();
    }

    static clickAddToCart() {
        cy.get(BTN_ADD_TO_CART).click();
    }

    static clickOptionHome() {
        cy.get(OPTION_HOME).click();
    }

    static clickOptionCart() {
        cy.get(OPTION_CART).click();
    }
}

export default DemoblazePage;