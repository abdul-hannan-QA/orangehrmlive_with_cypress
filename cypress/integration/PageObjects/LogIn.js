class Login{

    getUserName(){

       return  cy.get("input[placeholder='Username']")
    }
    getUserPassword(){
        return cy.get("input[placeholder='Password']")
    }
    getSubmit(){
        return cy.get("button[type='submit']")
    }

    getrequriedtext(){
        return cy.get(':nth-child(2) > .oxd-input-group > .oxd-text');
    }

    getrequriedtext2(){
        return cy.get(':nth-child(3) > .oxd-input-group > .oxd-text');
        
    }

    






}
export default Login;