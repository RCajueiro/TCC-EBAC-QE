# TCC - Engenheiro de Qualidade de Software EBAC

Projeto de Trabalho de Conclusão de Curso (TCC) para o curso de **Engenheiro de Qualidade de Software** da EBAC. Este repositório contém uma suíte de testes automatizados abrangente, abordando diferentes frentes de qualidade de software, incluindo UI, API, Mobile e Performance.

## 🎯 Objetivo

Implementar e consolidar os conhecimentos adquiridos no curso através de um projeto prático que demonstra a aplicação de estratégias e ferramentas de automação de testes em um contexto de software real.

## 📁 Estrutura do Projeto

O projeto está organizado em módulos especializados:

```
TCC-EBAC-QE/
├── UI/                    # Testes automatizados de interface (Web)
├── API/                   # Testes de API e integração
├── Mobile/                # Testes para aplicativos móveis
├── Performance/           # Testes de carga e performance
├── Gherkin/               # Especificações em BDD (Behavior-Driven Development)
└── TCC - Engenheiro de Qualidade de Software - EBAC.pdf  # Documentação principal do projeto
```

## 🛠️ Tecnologias Utilizadas

*   **JavaScript** (73.4%): Linguagem principal para a implementação dos testes.
*   **Gherkin** (26.6%): Utilizado para escrever cenários de testes em linguagem natural, seguindo a metodologia BDD.
*   **Ferramentas de Automação**: A estrutura sugere o uso de ferramentas populares no ecossistema JavaScript para cada frente (ex: Cypress para UI, Supertest/Jest para API, Appium para Mobile, k6 para Performance).

## 🚀 Como Executar os Testes

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/RCajueiro/TCC-EBAC-QE.git
    cd TCC-EBAC-QE
    ```

2.  **Instale as dependências:** (Consulte o documento PDF ou os READMEs internos de cada pasta para instruções específicas, pois o `package.json` principal não está visível na raiz).
    É provável que você precise navegar até cada diretório (`UI`, `API`, etc.) e executar:
    ```bash
    npm install
    ```

3.  **Execute a suíte de testes desejada:** Os comandos podem variar por módulo. Exemplos:
    ```bash
    # Para testes de UI (dentro da pasta UI/)
    npx cypress run

    # Para testes de API (dentro da pasta API/)
    npx jest
    ```

## 📚 Documentação

Restante da cocumentação e justificativas estão detalhadas no documento principal:
[**TCC - Engenheiro de Qualidade de Software - EBAC.pdf**](TCC%20-%20Engenheiro%20de%20Qualidade%20de%20Software%20-%20EBAC.pdf)

## 👤 Autor

**Ramon Cajueiro** - *Desenvolvimento do Projeto de TCC*.

---

*Este README foi gerado para melhorar a documentação e visibilidade do projeto.*
