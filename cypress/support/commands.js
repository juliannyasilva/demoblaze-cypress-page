import DemoblazePage from "../page/demoblaze";
import CartPage from "../page/demoblaze-cart";

Cypress.Commands.add('signup', (username, password) => {
    DemoblazePage.clickOptionSignup();
    DemoblazePage.typeSignupUsername(username);
    DemoblazePage.typeSignupPassword(password);
    DemoblazePage.clickSignup();
})

Cypress.Commands.add('login', (username, password) => {
    DemoblazePage.clickOptionLogin();
    DemoblazePage.typeLoginUsername(username);
    DemoblazePage.typeLoginPassword(password);
    DemoblazePage.clickLogin();
})

Cypress.Commands.add('fillPlaceOrder', (name, country, city, cardNumber, month, year) => {
    CartPage.clickPlaceOrder();
    CartPage.typeName(name);
    CartPage.typeCountry(country);
    CartPage.typeCity(city);
    CartPage.typeCreditCard(cardNumber);
    CartPage.typeMonth(month);
    CartPage.typeYear(year);
    CartPage.clickPurchase();
})

Cypress.Commands.add('addPhone', (model) => {
    DemoblazePage.clickCategoriePhones();
    DemoblazePage.clickPhone(model);
    DemoblazePage.clickAddToCart();
})