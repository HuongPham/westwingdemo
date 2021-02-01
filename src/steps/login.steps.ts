import {Given,When,Then} from 'cucumber';
import {expect} from 'chai';
import LoginOverlay from '../page_objects/login.overlay';
import LoginRegisterOverlay from '../page_objects/login_register.overlay';

Then('I should see the login-registration overlay',() =>{
    expect(LoginRegisterOverlay.isDisplayed()).to.be.true;
}); 
When('I switch to login form of the overlay',() =>{
    LoginRegisterOverlay.switch()
}); 
When('I log in with {string} and {string} credentials',{timeout: -1},(userName, password) =>{
    LoginOverlay.login(userName,password);
})