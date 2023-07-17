describe('Blog Search', () => {
  beforeEach(() => {
    cy.visit('https://blogdoagi.com.br/');
  });

  it('deve exibir os resultados da pesquisa', () => {
    cy.get('#search-open').click();
    cy.get('.desktop-search > .search-form > label > .search-field').type('dinheiro');
    cy.get('.desktop-search > .search-form > .search-submit').click();
    cy.get('.search-results').should('be.visible');

});

it('não deve exibir nenhuma mensagem de resultados', () => {
  cy.get('#search-open').click();
  cy.get('.desktop-search > .search-form > label > .search-field').type('11111111');
  cy.get('.desktop-search > .search-form > .search-submit').click();
  cy.contains('Nenhum resultado').should('be.visible');
});


  it('deve exibir nenhum resultado', () => {
    cy.get('#search-open').click();
    cy.get('.desktop-search > .search-form > label > .search-field').type('1#$%&*');    
    cy.get('.desktop-search > .search-form > .search-submit').click();
    cy.contains('Nenhum resultado').should('be.visible');
  });

  it('deve exibir lista com agibank quando pesquisa em branco', () => {
    cy.get('#search-open').click();
    cy.get('.desktop-search > .search-form > label > .search-field');    
    cy.get('.desktop-search > .search-form > .search-submit').click();
    cy.contains('Agibank').should('be.visible');
  });

  
});
