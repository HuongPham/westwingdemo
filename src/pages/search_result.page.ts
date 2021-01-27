import BasePage from 'src/pages/base.page';

class SearchResultPage extends BasePage {
    get resultsList () { return $('div[data-testid="generic-product"]') }
    get firstProduct() { return $('div[data-testid="generic-product"] ') }
    isSearched(){
        this.resultsList.waitForDisplayed(1000);
        return this.resultsList.isDisplayed();
    }
}
export default new SearchResultPage();