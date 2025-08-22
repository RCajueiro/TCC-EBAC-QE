import { faker } from "@faker-js/faker";
import cadastroPage from "../support/pages/cadastroPage";
import produtoPage from "../support/pages/produtoPage";

  it('buscar produto', () => {
    let nome = faker.person.firstName();
    let sobrenome = faker.person.lastName();
    let endereco = faker.location.streetAddress();
    let email = faker.internet.email(nome);
    let senha = faker.internet.password();
    cadastroPage.visitarUrl();
    cadastroPage.cadastroUsuario(email, senha);
    produtoPage.buscarProduto();
    produtoPage.selecionarVariacoes();
    produtoPage.adicionarAoCarrinho();
    produtoPage.visualizarCarrinho();
    produtoPage.concluirCompra();
    cadastroPage.preencherDados(nome, sobrenome, endereco);
    cy.get('#payment_method_cod').click()
    cy.get('#terms').click()
    cy.get('#place_order').click()
    cy.get('.woocommerce-notice').should('be.visible').and('have.text', 'Obrigado. Seu pedido foi recebido.')
  });