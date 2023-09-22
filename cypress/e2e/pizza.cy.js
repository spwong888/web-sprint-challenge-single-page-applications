
describe('Pizza Order Form Tests', () => {
    it('can add text to the name input', () => {
      cy.visit('/pizza'); 
  
      // Type a name into the input field
      cy.get('#name-input').type('John Doe').should('have.value', 'John Doe');
    });
  });

  describe('Pizza Order Form Tests', () => {
    it('can select multiple toppings', () => {
      cy.visit('/pizza'); 
  
      // Check multiple toppings checkboxes
      cy.get('input[name="topping"]').check(['pepperoni', 'sausage', 'mushrooms', 'onions']);
  
      // Assert that the checkboxes are checked
      cy.get('input[name="topping"]').should('be.checked');
    });
  });

  describe('Pizza Order Form Tests', () => {
    it('can submit the form', () => {
      cy.visit('/pizza'); 
  
      // Fill out the form fields (name, size, toppings, special instructions)
      cy.get('#name-input').type('John Doe');
      cy.get('#size-dropdown').select('Large');
      cy.get('input[name="topping"]').check(['pepperoni', 'mushrooms']);
      cy.get('#special-text').type('No cheese, please.');
  
      // Submit the form
      cy.get('#order-button').click();
  
      // Assertions after form submission (e.g., check for success message or redirect)
      // You may need to adapt this part based on your actual application behavior.
      // For example, if your app redirects to a confirmation page, you can check for elements on that page.
    });
  });