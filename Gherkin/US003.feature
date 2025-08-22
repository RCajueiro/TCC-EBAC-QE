#language: pt

Funcionalidade: API de cupons
Como admin da EBAC-SHOP
Quero criar um serviço de cupom
Para poder listar e cadastrar os cupons

Contexto:
Dado que o usuário admin está autenticado

Cenário: Listar todos os cupons
Quando faz uma requisição GET para "/wc/v3/coupons"
Então retorna status code 200
E uma lista de cupons

Cenário: Buscar cupom específico
Dado que existe um cupom com ID "123"
Quando faz uma requisição GET para "/wc/v3/coupons/123"
Então retorna status code 200
E os detalhes do cupom

Cenário: Cadastrar cupom com campos obrigatórios
Quando faz uma requisição POST para "/wc/v3/coupons" com:
| code          | GANHE10        |
| amount        | 10.00          |
| discount_type | fixed_product  |
| description   | Cupom de teste |
Então retorna status code 200
E o cupom "GANHE10" deve estar disponível

Cenário: Tentar cadastrar cupom com código repetido
Dado que o cupom "GANHE10" já está cadastrado
E o usuário admin está autenticado
Quando tenta cadastrar outro cupom com código "GANHE10"
Então retorna status code 400
E a mensagem "Código de cupom já existe"