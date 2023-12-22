import { PageObjectModel, EnhancedPageObject } from 'nightwatch';

var formCommands = {

    openForm: function (this: FormPage) {
        return this
        .click('@formLink');
    },

    login: function (this: FormPage) {
        return this
        .sendKeys('@usernameField', 'tomsmith')
        .sendKeys('@passwordField', 'SuperSecretPassword!')
        .click('@loginButton');
    }
};
 
const formPage: PageObjectModel = {
    url: 'https://the-internet.herokuapp.com/',
   
    commands: [formCommands],
    elements: {
        formLink: {
            selector: 'a[href="/login"]'
        },
        usernameField: {
            selector: '#username'
        },
        passwordField: {
            selector: '#password'
        },
        loginButton: {
            selector: 'button[type="submit"]',
        },
        logoutButton: {
            selector: 'a[href="/logout"]',
        }
        
    }
};
 
export default formPage;
 
export interface FormPage
  extends EnhancedPageObject<typeof formCommands,
  typeof formPage.elements> { }
