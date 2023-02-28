import * as user from '../fixtures/user.json';
import LoginPage from '../support/pages/LoginPage';
import AccountPage from '../support/Pages/Account Page';

it('Authorization', () => {

    LoginPage.visit();
    LoginPage.submitLoginForm(user);

    AccountPage.verifyUserName(user);

})
