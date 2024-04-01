import { LoginPage } from "./pages/login_page";

const loginPage = new LoginPage()


it('HomePage', function () {

    cy.visit("https://www.credpal.com");

    cy.wait(2000);

    cy.contains('Products').click();

    cy.wait(2000);

    cy.get(':nth-child(1) > [href="/business"]').click();

    cy.wait(2000);

    cy.get(':nth-child(1) > [href="/faqs"]').click();

    cy.wait(2000);

    cy.get('[href="/sales"]').click();

    cy.wait(2000);

    cy.get('.mx-auto > .flex-grow > :nth-child(2) > .flex').dblclick();

    cy.wait(2000);

    cy.get('.flex-grow > :nth-child(2) > .appearance-none').click();

    cy.wait(2000);

    cy.get("button.appearance-none").first().click();

    cy.wait(3000);

    cy.visit("https://www.credpal.com")

    cy.wait(3000);

    cy.contains('Needs')

    cy.wait(3000);

    cy.contains('Payments')

    cy.wait(3000);
    
    cy.contains('Learn');
    cy.wait(2000);

    cy.contains('Start')
    cy.wait(3000);

    cy.get('.px-5 > .appearance-none').click({force:true});
    
    cy.wait(10000);

})


it('AffiliatesPage', function () {

    
    cy.visit("https://www.credpal.com");

    cy.get('[href="/sales"]').click();

    loginPage.enterFirstName('CHIEMEZIE');
    loginPage.enterLastName('AARON');
    loginPage.enterEmail('DANAARON1234@GMAIL.COM');
    loginPage.enterphoneNum();
    loginPage.clickCheckbox();
    loginPage.clickSubmit();

})



    // cy.wait(2000);

    // cy.contains('Products').click();

    // cy.wait(2000);

    // cy.get(':nth-child(1) > [href="/business"]').click();

    // cy.wait(2000);

    // cy.get(':nth-child(1) > [href="/faqs"]').click();

    // cy.wait(2000);

    // cy.get('[href="/sales"]').click();

    // cy.wait(2000);

    // cy.get('.mx-auto > .flex-grow > :nth-child(2) > .flex').dblclick();

    // cy.wait(2000);

    // cy.get('.flex-grow > :nth-child(2) > .appearance-none').click();

    // cy.wait(2000);

    // cy.get("button.appearance-none").first().click();

    // cy.wait(1000);

    // cy.visit("https://www.credpal.com")

    // cy.get('.min-h-screen > :nth-child(2)');
    // cy.wait(1000);
    // cy.get('.min-h-screen > :nth-child(3)');
    // cy.wait(1000);
    // cy.contains('Learn');
    // cy.wait(1000);

    // cy.get('.px-5 > .appearance-none').click({force:true});

    