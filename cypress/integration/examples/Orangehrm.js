

import Login from "../PageObjects/LogIn";




describe('orangehrm testing',function(){

    before(function(){
        cy.fixture('example').then(function(logindata){

            this.logindata=logindata;
        })
    })


    it('valid login',function(){

cy.visit("https://opensource-demo.orangehrmlive.com");
 const login=new Login()

 login.getUserName().type(this.logindata.userName);
 login.getUserPassword().type(this.logindata.passWard);
 login.getSubmit().click();




    })
})