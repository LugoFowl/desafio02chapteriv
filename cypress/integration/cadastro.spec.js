/// <reference types = "cypress" />

var Chance = require('chance')
var chance = new Chance()

describe('Cadastro', () => {
    it('Quando eu informar os dados e finalizar, então o cadastro deve ser efetuado', () => {
        cy.visit('http://automationpractice.com/index.php?controller=authentication&back=my-account')

        cy.get('#email_create').type(chance.email())
        cy.get('button#SubmitCreate').click()
        cy.url('contain', 'account-creation')

       cy.get('#id_gender1').check()
       cy.get('#customer_firstname').type(chance.first())
       cy.get('#customer_lastname').type(chance.last())
       cy.get('#passwd').type(chance.word({length: 5}))
       cy.get('#days').select('7')
       cy.get('#months').select('August')
       cy.get('#years').select('1987')
       cy.get('#newsletter').check()
       cy.get('#optin').check()
       cy.get('#firstname').type(chance.first())
       cy.get('#lastname').type(chance.last())
       cy.get('#company').type(chance.last())
       cy.get('#address1').type(chance.address())
       cy.get('#address2').type(chance.areacode())
       cy.get('#id_country').select('21')

       cy.get('#city').type(chance.city())
       cy.get('#postcode').type(chance.zip())
       cy.get('select#id_state').select('Florida', {force : true})

       cy.get('#other').type(chance.sentence())
       cy.get('#phone').type(chance.phone())
       cy.get('#phone_mobile').type(chance.phone())
       cy.get('#alias').type(chance.address())
      
       cy.get('#submitAccount').click()

       cy.url('contain', 'my-account')






    });
});