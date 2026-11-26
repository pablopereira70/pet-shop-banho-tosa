<div align="center">

# 🐾 Pet Shop Banho & Tosa

Sistema web para gerenciamento de um pet shop, permitindo o cadastro de tutores, animais, serviços e o registro de atendimentos de banho e tosa.

O objetivo é oferecer uma interface simples e organizada para que o estabelecimento consiga controlar seus clientes, pets e os serviços realizados no dia a dia.

![Javascript](https://img.shields.io/badge/Javascript-F7DF1E?style=for-the-badge&logo=Javascript&logoColor=black)
![Hmtl](https://img.shields.io/badge/html-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![Css](https://img.shields.io/badge/css-663399?style=for-the-badge&logo=css&logoColor=white)
![Git](https://img.shields.io/badge/Git-F03C2E?style=for-the-badge&logo=git&logoColor=white)
![Github](https://img.shields.io/badge/Github-181717?style=for-the-badge&logo=github&logoColor=white)

</div>

## 👥 Integrantes

| Nome | Github | Linkedin |
| :---: | :---: | :---: |
| Pablo Pereira | [![Github](https://img.shields.io/badge/pablopereira70-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/pablopereira70) | [![LinkedIn](https://img.shields.io/badge/pablopereira70-0A66C2?style=flat-square)](https://www.linkedin.com/in/pablopereira70/) |
| Pedro Sousa | [![Github](https://img.shields.io/badge/P3drosous4-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/P3drosous4) | [![LinkedIn](https://img.shields.io/badge/pedro--sous4-0A66C2?style=flat-square)](https://www.linkedin.com/in/pedro-sous4/) |

## 📍 Funcionalidades

- Cadastro de tutores (nome, telefone)
- Cadastro de animais vinculados a um tutor
- Cadastro de serviços (banho, tosa, hidratação, etc.) com preços
- Registro de atendimentos (tutor, animal, serviço, valor)
- Cálculo de valor total
- Cálculo de desconto (Metódo escolhindo pelos integrantes)

## 🔒 Regras de preço e desconto

**Tabela de precificação por porte:**

| Porte | Banho | Tosa | Hidratação | Pacote completo |
| :---: | :---: | :---: | :---: | :---: |
| Pequeno |	R$ 40 | R$ 50 | R$ 45 |	R$ 100 |
| Médio	| R$ 50	| R$ 60	| R$ 55	| R$ 120 |
| Grande | R$ 60 | R$ 70 | R$ 65 | R$ 140 |

**Desconto por quantidade de animais no mesmo atendimento:**

- 1 animal: 0%
- 2 animais: 5%
- 3 ou mais animais: 10%

O total exibido deve mostrar subtotal, desconto e total final.

## 📂 Estrutura de repositório

```text
pet-shop-banho-tosa/
├── css/
│   └── style.css              # Estilos globais da aplicação
├── js/
│   ├── models/
│   │   ├── Tutor.js           # Classe que representa um tutor
│   │   ├── Animal.js          # Classe que representa um animal
│   │   ├── Servico.js         # Classe que representa um serviço
│   │   └── Atendimento.js     # Classe que representa um atendimento
│   └── main.js                # Lógica principal e manipulação do DOM
├── docs/
│   ├── casos.md               # Casos de uso e regras de negócio
│   └── diagramas.md           # Diagramas do sistema
├── index.html                 # Página principal
└── README.md
```

## ▶️ Como Executar

Como o projeto é front-end e não possui backend, os testes são realizados diretamente na interface:

1. Abra o index.html no navegador.

2. Faça login (Usuário: `admin`, Senha: `1234`)

3. Cadastre um tutor.

4. Cadastre um animal vinculado a esse tutor.

5. Cadastre um serviço.

6. Registre um atendimento e verifique se o valor é calculado corretamente conforme as regras de desconto.

## 🧠 Decisões técnicas

### JavaScript puro (Vanilla JS)
Optou-se por não utilizar frameworks para reforçar o aprendizado dos fundamentos da linguagem, manipulação do DOM e organização de código em módulos (ES Modules).

### Separação de modelos
As entidades foram isoladas na pasta `models/`, cada uma em seu próprio arquivo, facilitando a manutenção e a reutilização. Essa organização segue uma inspiração em padrões de orientação a objetos, mesmo em um contexto de front-end.

### Documentação em `docs/`
Os casos de uso e diagramas foram separados da documentação principal para manter o README limpo e focado na visão geral do projeto.

### Estrutura de pastas enxuta
A raiz contém apenas o `index.html` e o `README.md`. Os demais recursos estão organizados em `css/`, `js/` e `docs/`, o que mantém o projeto compreensível e fácil de navegar.

## 📄 Documetações adicionais

[Casos de uso](docs/casos.md)

[Diagramas de sequência](docs/diagramas.md)


## 📚 Aprendizados

✅ Organização de código JavaScript em módulos e classes

✅ Manipulação do DOM de forma estruturada

✅ Aplicação de regras de negócio no front-end

✅ Separação de responsabilidades entre modelos, lógica principal e interface

✅ Documentação de casos de uso e diagramas para apoiar o desenvolvimento

✅ Versionamento com Git e boas práticas de commit