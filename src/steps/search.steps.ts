import {Given,When,Then} from 'cucumber';
import {expect} from 'chai';
import HomePage from '../page_objects/home.page';
import SearchResultPage from "../page_objects/search_result.page";

When('I search for {string}',(keyword) =>{
    HomePage.searchProduct(keyword)
});
Then('I should see product listing page with a list of products',() =>{
    expect(SearchResultPage.isSearched()).to.be.true;
    SearchResultPage.closePopup()
});
When('I click on wishlist icon of the first found product',() =>{
    SearchResultPage.addToWishlist(0)
});