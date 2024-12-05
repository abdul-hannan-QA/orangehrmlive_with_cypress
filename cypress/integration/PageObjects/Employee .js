class Employee {

    navigateToEmployee(){

        return cy.get(':nth-child(2) > .oxd-main-menu-item > .oxd-text') 

       return cy.get(':nth-child(3) > .oxd-topbar-body-nav-tab-item')// Click on Add Employee menu

    }
    navigateToAddEmployee(){

        return cy.get(':nth-child(3) > .oxd-topbar-body-nav-tab-item')
        
    }
    employeeName()
    {

        return cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').type('jone')
     

    }
    







}
export default Employee ;