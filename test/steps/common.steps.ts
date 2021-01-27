import {Given,When,Then} from 'cucumber';
import {expect} from 'chai';
import LoginPage from 'src/pages/login_overlay.page';
import HomePage from 'src/pages/home.page';

Given('I am on the WestwingNow home page',() => {
    HomePage.open;
});
Then('I should see the login/registration overlay',() =>{

}); 
When('I switch to login form of the overlay',() =>{

}); 
When('I log in with "<user_name>" and "<password>" credentials',() =>{

});
