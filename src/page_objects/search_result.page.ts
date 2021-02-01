import BasePage from './base.page';

class SearchResultPage extends BasePage {
    get inputSearch(){return $('input[data-testid="search-input"]')}
    get resultsList () { return $('div[data-testid="generic-product"]') }
    get crossCategory() { return $('[data-testid="cross-category-navigation"]')}
    get wishlistIcon() { return $$('div[data-testid="wishlist-icon"]') }
    get wishlistCount() { return $('[data-testid="wishlist-counter"]').getText() }
    get wishlistBubble() { return $('[data-testid="wishlist-bubble"]') }
    get popup(){return $('[data-testid="shop-to-club-popup-wrapper"]')}

    isSearched(){
        this.crossCategory.waitForExist({timeout: 10000})
        return  this.resultsList.waitForExist({ timeout: 10000 });
    }
    addToWishlist(idx:number){
        this.wishlistIcon[idx].click()
    }
    isAdded(){
        return parseInt(this.wishlistCount) >= 1
    }
    openWishlist(){ 
        this.wishlistBubble.click()
    }
    closePopup(){
        browser.refresh()
    }
}
export default new SearchResultPage();