class CadastroPage {
  visitarUrl() {
    cy.visit("/");
  }

  cadastroUsuario(email, senha) {
    cy.get(".icon-user-unfollow").click();
    cy.get("#reg_email").type(email);
    cy.get("#reg_password").type(senha);
    cy.get(":nth-child(4) > .button").click();
  }
  preencherDados(nome, sobrenome, endereco) {
    cy.get('#billing_first_name').type(nome);
    cy.get('#billing_last_name').type(sobrenome);
    cy.get('#billing_address_1').type(endereco);
    cy.get('#billing_city').type('São Paulo');
    cy.get('#billing_postcode').type('01234-567');
    cy.get('#billing_phone').type('(11) 91234-5678');
  }
}

export default new CadastroPage()