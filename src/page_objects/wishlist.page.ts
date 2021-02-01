import BasePage from './base.page';
import {expect} from 'chai';

class WishlistPage extends BasePage {
    get btnDelete(){ return $$('//div[@class ="listProductsWrapper"]//button') }
    get productList() {return $$('//div[@class ="listProductsWrapper"]//button')}
    // get productList() {return $$('//div[@class ="listProductsWrapper"]//button')}

    waitProductListDisplayed(){
        let isDisplay = false
        this.productList.forEach((el) => {
            isDisplay = el.waitForExist({ timeout: 50000 })
        })
        return isDisplay
        // this.productList.waitForExist({ timeout: 10000 })
    }
    deleteProduct(idx:number){
        this.btnDelete[idx].waitForClickable()
        this.btnDelete[idx].click()
    }
}
export default new WishlistPage();
