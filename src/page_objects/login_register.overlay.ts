
import LoginBase from './login_base.overlay';

class LoginRegisterOverlay extends LoginBase{
    get btnSwitch () { return $('button[data-testid="login_reg_switch_btn"]') }
    get dialog() {return $('div[data-testid="reg__mode"]')}
    isDisplayed(){
        return this.dialog.waitForExist({ timeout: 10000 })
    }
    switch(){
        this.btnSwitch.waitForClickable({timeout: 10000 })
        this.btnSwitch.click()
    }
}
export default new LoginRegisterOverlay();