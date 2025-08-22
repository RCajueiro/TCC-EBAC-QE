#language: pt

Funcionalidade: Adicionar item ao carrinho
Como cliente da EBAC-SHOP
Quero adicionar produtos no carrinho
Para realizar a compra dos itens

Cenário: Tentar adicionar mais de 10 unidades do mesmo produto
Dado que o cliente já possui 10 unidades de um produto no carrinho
Quando ele tenta adicionar mais uma unidade do mesmo produto
Então o sistema deve exibir a mensagem "Limite de 10 unidades por produto atingido"

Esquema do Cenário: Tentar efetuar uma compra com valor total acima de R$990
Dado que o cliente possui itens no carrinho com valor total de <valor>
Quando ele tenta finalizar a compra
Então o sistema deve exibir a mensagem <mensagem>

Exemplos:
| valor | mensagem                            |
| "990" | "Pedido Recebido"                   |
| "991" | "Valor máximo permitido é de R$990" |

Cenário: Comprar produtos com valor total entre R$200 e R$600
Dado que o cliente possui itens no carrinho com valor total de R$500
Quando ele clica em "Concluir compra"
Então o sistema deve aplicar um cupom de 10% de desconto sobre o valor total
E o valor final deve ser R$450

Cenário: Comprar produtos com valor total acima de R$600
Dado que o cliente possui itens no carrinho com valor total de R$700
Quando ele finaliza a compra
Então o sistema deve aplicar um cupom de 15% de desconto sobre o valor total
E o valor final deve ser R$595