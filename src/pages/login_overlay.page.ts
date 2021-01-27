import BasePage from 'src/pages/base.page';

class LoginOverlay extends BasePage {

    get inputUsername () { return $('input[data-testid="long-register-email-field"]') }
    get inputPassword () { return $('input[data-testid="long-register-password-field"]') }
    get checkTermAccept () { return $('input[data-testid="long-register-password-field"]') }
    get btnSubmit () { return $('button[data-testid="login_reg_submit_btn"]') }

    loginWithCredentials(username, password) {
        this.inputUsername.setValue(username)
        this.inputPassword.setValue(password)
        this.checkTermAccept.click()
        this.btnSubmit.click()
    }
    isLogined(){
        
    }
}

export default new LoginOverlay();