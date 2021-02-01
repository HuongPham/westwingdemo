export default class BaseLogin {
    get inputUsername () { return $('input[data-testid="long-register-email-field"]') }
    get inputPassword () { return $('input[data-testid="long-register-password-field"]') }
    get btnSubmit () { return $('button[data-testid="login_reg_submit_btn"]') }

    login(username, password) {
        this.inputUsername.setValue(username)
        this.inputPassword.setValue(password)
        this.btnSubmit.click()
    }
}