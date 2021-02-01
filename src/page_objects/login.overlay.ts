import LoginBase from './login_base.overlay';

class LoginOverlay extends LoginBase {
    
    get dialog(){ return $('div[data-testid="login_and_register"]')}
    isDisplayed(){
        return this.dialog.waitForExist({ timeout: 10000 })
    }
    isClosed(){
        this.dialog.waitForExist({ reverse: true, timeout: 10000 });
    }
}
export default new LoginOverlay();