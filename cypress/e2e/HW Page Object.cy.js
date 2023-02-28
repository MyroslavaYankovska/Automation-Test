import * as user from '../fixtures/user.json';
import LoginPage from '../support/pages/LoginPage';
import AccountPage from '../support/Pages/Account Page';
import AurhorizationPage from '../support/Pages/Aurhorization Page';
import OrderPage from '../support/Pages/Order Page';
import Order2Page from '../support/Pages/Order2 Page';
import {loginViaUI} from '../support/helper';
import {SearchProduct} from '../support/helper';
import BasePage from '../support/Pages/BasePage';



it('Registration', () => {

    AurhorizationPage.visitToHomePage();
    AurhorizationPage.Loginpage();
    AurhorizationPage.SignUppage();
    AurhorizationPage.AuthorizationForm(user);
 
})

it('Authorization', () => {

    LoginPage.visit();
    LoginPage.submitLoginForm(user);

    AccountPage.verifyUserName(user)

})

it('Order from main Page', () => {
    loginViaUI(user);

    OrderPage.GetOrder();
    OrderPage.verifyOrder();
})

// it('Order from search', () => {
//     loginViaUI(user);
//     Order2Page.GetSearch();
//     SearchProduct('ck IN2U Eau De Toilette Spray for Him');
//     Order2Page.GetSearchOrder()

// })