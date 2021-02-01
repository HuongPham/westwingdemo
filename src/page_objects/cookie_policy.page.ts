import BasePage  from './base.page';

class CookiesPolicy extends BasePage {
    get dialog() {return $('#onetrust-pc-sdk')}
    get btnAccept() { return $('#onetrust-accept-btn-handler')}

    acceptCookies(){
        this.dialog.waitForExist({timeout: 10000})
        this.btnAccept.click()
    }
}
export default new CookiesPolicy();