import BasePage from 'src/pages/base.page';

class HomePage extends BasePage {
    get inputSearch(){
        return $('input[data-testid="search-input"]');
    }
    get open() {
        return browser.url('https://www.westwingnow.de');
    }
    searchProduct(keyword){
        this.inputSearch.setValue(keyword);
        this.inputSearch.keys("\uE007");
    }
}
export default new HomePage();