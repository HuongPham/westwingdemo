import BasePage from 'src/pages/base.page';

class LoginRegisterOverlay extends BasePage {
    get btnSwitch () { return $('button[data-testid="login_reg_switch_btn"]') }
    switchLoginOverlay(){
        this.btnSwitch.click()
    }
    get overlay(){ return $('div[data-testid="login_and_register"]')}

    
}