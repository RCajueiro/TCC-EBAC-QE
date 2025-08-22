class produtoPage {
    visitarUrl() {
        cy.visit("/")
    }

    buscarProduto() {
        cy.get('[name="s"]').eq(1).type("Ingrid{enter}")
    }
    selecionarVariacoes() {
        cy.get('.button-variable-item-XL').click()
        cy.get('.button-variable-item-Orange').click()
        cy.get('.button-variable-item-XL').click()
    }
    adicionarAoCarrinho() {
        cy.get('.single_add_to_cart_button').click()
    }
    visualizarCarrinho() {
        cy.get('.woocommerce-message > .button').click()
    }
    concluirCompra() {
        cy.get('.checkout-button').click()
    }
}

export default new produtoPage()