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

    






}
export default Login;