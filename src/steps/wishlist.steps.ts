import {When,Then} from 'cucumber';
import {expect} from 'chai';
import WishlistPage from '../page_objects/wishlist.page';
import SearchResultPage from '../page_objects/search_result.page';

Then('The product should be added to the wishlist',() =>{
    expect(SearchResultPage.isAdded()).to.be.true;
}); 
When('I go to the wishlist page',() =>{
    SearchResultPage.openWishlist()
}); 
Then('I delete the product from my wishlist',()=>{
    expect(WishlistPage.waitProductListDisplayed()).to.be.true;
    WishlistPage.deleteProduct(0)
}); 