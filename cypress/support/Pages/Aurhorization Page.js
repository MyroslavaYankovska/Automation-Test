
import BasePage from "./BasePage";
class AuthorizationPage extends BasePage{

    visitToHomePage(){
        cy.log('Open website home page');
        cy.visit('/');
    }
    Loginpage(){
        return cy.get('.topnavbar [data-id="menu_account"]').click();
    }

    SignUppage(){
        return cy.get('[title="Continue"]').click();
    }

    getFirstNamePage(){
        return cy.get('#AccountFrm_firstname');
    }

    getLastNamePage(){
        return cy.get('#AccountFrm_lastname');
    }

    getEmail(){
        return cy.get('#AccountFrm_email');
    }

    getAddress(){
        return cy.get('#AccountFrm_address_1');
    }

    getCity(){
        return cy.get('#AccountFrm_city');
    }

    getPostCode(){
        return cy.get('#AccountFrm_postcode');
    }

    getCountry(){
        return cy.get('#AccountFrm_country_id');
    }

    getLoginName(){
        return cy.get('#AccountFrm_loginname');
    }

    getPassword(){
        return cy.get('#AccountFrm_password');
    }

    getConfirmPassword(){
        return cy.get('#AccountFrm_confirm');
    }

    getZoneId(){
        return cy.get('#AccountFrm_zone_id');
    }

    getCheckbox1(){
        return cy.get('#AccountFrm_newsletter0');
    }

    getCheckbox2(){
        return cy.get('#AccountFrm_agree');
    }

    getSignUpForm(){
        return cy.get('button[title="Continue"]');
    }

    AuthorizationForm(user){
        cy.log('Trying to uthorization ...');

        this.getFirstNamePage().type(user.firstName);
        this.getLastNamePage().type(user.lastName);
        this.getEmail().type(user.email);
        this.getAddress().type(user.address);
        this.getCity().type(user.city);
        this.getPostCode().type(user.postCode);
        this.getCountry().select('Denmark');
        this.getLoginName().type(user.username);
        this.getPassword().type(user.password);
        this.getConfirmPassword().type(user.password);
        this.getZoneId().select(2, {force:true}).invoke('val');
        this.getCheckbox1().click();
        this.getCheckbox2().click();
        this.getSignUpForm().click();
    }

}

export default new AuthorizationPage();


