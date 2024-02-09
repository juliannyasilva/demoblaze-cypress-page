const OPTION_SIGNUP = '#signin2';
const OPTION_HOME = '';
const OPTION_CONTACT = '';
const OPTION_ABOUT_US = '';
const BTN_CLOSE = '#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-secondary';
const BTN_SIGNUP = '#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary';
const FIELD_SIGNUP_USERNAME = '#sign-username';
const FIELD_SIGNUP_PASSWORD = '#sign-password';


class DemoblazePage {

    static visit() {
        cy.visit('/');
    }

    static clickSignup() {
        cy.get(OPTION_SIGNUP).click();
    }

    static typeUsername(username) {
        cy.get(FIELD_SIGNUP_USERNAME).type(username);
    }

    static typePassword(password) {
        cy.get(FIELD_SIGNUP_PASSWORD).type(password);
    }

    static clickClose() {
        cy.get(BTN_CLOSE).click();
    }

    static clickBtnSignup() {
        cy.get(BTN_SIGNUP).click();
    }
}

export default DemoblazePage;