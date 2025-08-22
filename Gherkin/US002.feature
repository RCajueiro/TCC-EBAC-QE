#language: pt

Funcionalidade: Login na plataforma
Como cliente da EBAC-SHOP
Quero fazer o login (autenticação) na plataforma
Para visualizar meus pedidos

Contexto: 
Dado que o usuário está na página de login

Cenário: Login com credenciais válidas
Quando ele insere um e-mail e senha válidos
E clica no botão "Login"
Então o sistema deve autenticar o usuário

Cenário: Tentativa de login com usuário inativo
Quando ele insere as credenciais de um usuário inativo
E clica no botão "Login"
Então o sistema deve exibir a mensagem "Usuário inativo. Contate o suporte."
E não deve permitir o acesso

Cenário: Login com credenciais inválidas
Quando ele insere um e-mail ou senha incorretos
E clica no botão "Login"
Então o sistema deve exibir a mensagem "E-mail ou senha incorretos"
E não deve permitir o acesso

Cenário: Bloqueio temporário após múltiplas tentativas falhas
Quando ele insere credenciais inválidas 3 vezes seguidas
Então o sistema deve exibir a mensagem "Login bloqueado por 15 minutos"
E deve desativar o botão de login por 15 minutos