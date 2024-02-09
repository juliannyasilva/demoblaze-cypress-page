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
const FIELD_USERNAME = '#nameofuser';


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

    static checkWelcome() {
        cy.get(FIELD_USERNAME).contains('Welcome');
    }
}

export default DemoblazePage;