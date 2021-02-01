import BasePage from './base.page';

class HomePage extends BasePage {
    get inputSearch(){return $('input[data-testid="search-input"]')}
    get open() {return browser.url('/')}

    searchProduct(keyword){
        this.inputSearch.addValue(keyword);
        this.inputSearch.keys("\uE007");
    }
}
export default new HomePage();