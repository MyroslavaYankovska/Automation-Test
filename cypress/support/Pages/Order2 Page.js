import BasePage from "./BasePage";

class Order2Page extends BasePage{
 
    GetSearch(){
        this.getSearchField().type('i').closest("form").submit();
    }
    
    GetSearchOrder(){
        cy.log('Order product with Search fiels');

        this.AddProducttoCart().click();
        this.ChooseQuantity().clear().type('2');
        this.ChooseCountry().select('Ukraine');
        this.ChooseCity().select('Kyiv');
        this.GetPullRight().click({multiple: true});
        this.GetConfirm().click();
       
    }   
}
export default new Order2Page();
