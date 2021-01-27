import {Given,When,Then} from 'cucumber';
import {expect} from 'chai';
import HomePage from 'src/pages/home.page';
import SearchResultPage from "src/pages/search_result.page";

When('I search for {string}',(keyword) =>{
    HomePage.searchProduct(keyword)
});
Then('I should see product listing page with a list of products',() =>{
    
});
When('I click on wishlist icon of the first found product',() =>{

});