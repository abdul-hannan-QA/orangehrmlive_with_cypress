

import Login from "../PageObjects/LogIn";




describe('OrangeHRM Login Tests',function(){

    before(function(){
        cy.fixture('example').then(function(logindata){

            this.logindata=logindata;
        })
    })

    // Run this before each test to navigate to the login page
    beforeEach(function(){

        cy.visit('https://opensource-demo.orangehrmlive.com/'); // Navigate to the OrangeHRM login page
    })

    it('Valid Login: Should successfully log in and redirect to the dashboard',function(){

 const login=new Login()

 login.getUserName().type(this.logindata.userName);
 login.getUserPassword().type(this.logindata.passWard);
 login.getSubmit().click();

 // Assert the user is redirected to the dashboard
 cy.url().should('include','dashboard'); // URL should contain "/dashboard"
 cy.contains('Dashboard').should('be.visible'); // Verify the "Dashboard" text is visible


    })


    it('Invalid Login: Should display an error message for invalid credentials',function(){
        const login=new Login()
        login.getUserName().type("InvalidUser");
        login.getUserPassword().type("InvalidPass");
        login.getSubmit().click(); // Click the login button

        // Assert the error message is displayed
    cy.contains('Invalid credentials').should('be.visible'); // Check for error message
    cy.url().should('not.include', '/dashboard'); // Ensure user is not redirected to the dashboard




    })

    it('Empty Login: Should display an error message for empty credentials',function(){
        const login=new Login()
        
        login.getSubmit().click(); // Click the login button

        login.getrequriedtext().should('contain','Required');

    
    cy.url().should('not.include', '/dashboard'); // Ensure user is not redirected to the dashboard


    })
})