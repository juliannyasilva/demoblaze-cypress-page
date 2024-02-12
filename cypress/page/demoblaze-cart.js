const OPTION_BTN_PLACEORDER = '.col-lg-1 > .btn';
const FIELD_NAME = '#name';
const FIELD_COUNTRY = '#country';
const FIELD_CITY = '#city';
const FIELD_CREDIT_CARD = '#card';
const FIELD_MONTH = '#month';
const FIELD_YEAR = '#year';
const OPTION_BTN_PURCHASE = '#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary';
const BTN_DELETE = '#tbodyid > :nth-child(1) > :nth-child(4) > a';

class DemoblazeCartPage {

    static clickPlaceOrder() {
        cy.get(OPTION_BTN_PLACEORDER).click();
    }

    static typeName(name) {
        cy.get(FIELD_NAME).type(name);
    }

    static typeCountry(country) {
        cy.get(FIELD_COUNTRY).type(country, {force: true});
    }

    static typeCity(city) {
        cy.get(FIELD_CITY).type(city, {force: true});
    }

    static typeCreditCard(creditCard) {
        cy.get(FIELD_CREDIT_CARD).type(creditCard, {force: true});
    }

    static typeMonth(month) {
        cy.get(FIELD_MONTH).type(month);
    }

    static typeYear(year) {
        cy.get(FIELD_YEAR).type(year);
    }

    static clickPurchase() {
        cy.get(OPTION_BTN_PURCHASE).click();
    }

    static deleteProduct() {
        cy.get(BTN_DELETE).click();
    }

}

export default DemoblazeCartPage;