import {Given,When,Then} from 'cucumber';
import {expect} from 'chai';
import LoginOverlay from '../page_objects/login.overlay';
import HomePage from '../page_objects/home.page';
import CookiesPolicy from '../page_objects/cookie_policy.page';
import LoginRegisterOverlay from '../page_objects/login_register.overlay';

Given('I am on the WestwingNow home page',() => {
    HomePage.open;
    CookiesPolicy.acceptCookies()
});

