import {Given,When,Then} from 'cucumber';
import {expect} from 'chai';
import LoginOverlay from '../page_objects/login.overlay';
import LoginRegisterOverlay from '../page_objects/login_register.overlay';
import * as credential from '../data/credential_valid.json'

Then('I should see the login-registration overlay',() =>{
    expect(LoginRegisterOverlay.isDisplayed()).to.be.true;
}); 
When('I switch to login form of the overlay',() =>{
    LoginRegisterOverlay.switch()
}); 
When('I log in with {string} and {string} credentials',{timeout: -1},(userName, password) =>{
    LoginOverlay.login(userName,password);
})
When('I login with my credentials',() =>{
    if(browser.capabilities.browserName == "chrome")
        {
            LoginOverlay.login(credential['cred_chrome']['user'],credential['cred_chrome']['password']);
        } else if (browser.capabilities.browserName == "firefox"){
            LoginOverlay.login(credential['cred_firefox']['user'],credential['cred_firefox']['password']);
        }

    // LoginOverlay.login(creObj['user'],creObj['password']);
})