import BasePage from "./BasePage";

class OrderPage extends BasePage{

    GetCategorMenu(){
        return cy.get('.nav-pills.categorymenu').children('li').eq(5);
    }
    SortProduct(){
        return cy.get('[name="sort"]').select('Name Z - A');
    }
    GetProduct(){
        return cy.get('[title="ck IN2U Eau De Toilette Spray for Him"]');
    }
    AddProducttoCart(){
        return cy.get('a.cart');
    }
    ChooseQuantity(){
        return cy.get('#cart_quantity7808d50be7efed8dd74bfcc27df4d70570');
    }
    ChooseCountry(){
        return cy.get('[name="country[]"]').select('Ukraine');
    }
    ChooseCity(){
        return cy.get('[name="country_zones[]"]').select('Kyiv');
    }
    GetPullRight(){
        return cy.get('#cart_checkout2');
    }
    GetConfirm(){
        return cy.get('[title="Confirm Order"]');
    }

    GetOrder(){
        cy.log('Order product');
        this.GetCategorMenu().click();
        this.SortProduct();
        this.GetProduct().click();
        this.AddProducttoCart().click();
        this.ChooseQuantity().clear().type('2');
        this.ChooseCountry();
        this.ChooseCity();
        this.GetPullRight().click();
        this.GetConfirm().click();
    }
    verifyOrder(){
        cy.get('.maintext').should('contain', ' Your Order Has Been Processed!');
    }
}

export default new OrderPage();
