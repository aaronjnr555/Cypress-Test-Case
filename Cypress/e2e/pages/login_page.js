export class LoginPage{

    firstname_textbox = '#first_name';
    lastname_textbox = '#last_name';
    email_textbox = '#email';
    phoneNum_textbox = '#phone';
    Submit_textbox = '.gap-4 > .appearance-none';

    enterFirstName(firstname){
        cy.get(this.firstname_textbox).type(firstname);

    }

    enterLastName(lastname){
        cy.get(this.lastname_textbox).type(lastname);

    }

    enterEmail(email){
        cy.get(this.email_textbox).type(email);

    }

    enterphoneNum(){
        cy.get(this.phoneNum_textbox).type('08030965367');

    }

    clickCheckbox(){
        cy.get('.gap-5 > :nth-child(1)').click();
        // cy.get(".border border-[#E6E8EC] cursor-pointer flex items-center justify-between h-[3.75rem] px-[1.875rem] py-[1.125rem] rounded-xl border-[#1E86FF]").click()
    }

    clickSubmit(){
        cy.get('.gap-4 > .appearance-none').click();

    }
}