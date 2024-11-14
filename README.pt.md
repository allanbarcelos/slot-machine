# Slot Machine Game 🎰
Português | [English](README.md)

Este é um projeto simples de uma Máquina Caça-Níquel (Slot Machine) desenvolvida utilizando HTML, CSS, JavaScript e Node.js.

## 📝 Descrição do Projeto

O projeto consiste em uma aplicação web onde o usuário pode interagir com uma máquina caça-níquel. Ao clicar no botão **Spin**, os rolos giram e, se todos os símbolos coincidirem, o jogador ganha. O lado do servidor é implementado usando Node.js e Socket.IO para comunicação em tempo real.

### Funcionalidades

- Interface de usuário estilosa com animações em CSS.
- Botão interativo para "girar" os rolos da máquina.
- Comunicação em tempo real entre o cliente e o servidor utilizando Socket.IO.

## 🚀 Como Rodar o Projeto

### Pré-requisitos

Certifique-se de ter o Node.js instalado em sua máquina. Você pode verificar usando:

```bash
node -v
npm -v
```

### Instalação

1. Clone o repositório:

    ```bash
    git clone https://github.com/allanbarcelos/slot-machine.git
    cd slot-machine
    ```

2. Instale as dependências:

    ```bash
    npm install
    ```

3. Inicie o servidor:

    ```bash
    node server.js
    ```

4. Abra o navegador e acesse:

    ```
    http://localhost:3000
    ```

## 📂 Estrutura do Projeto

```
.
├── /public
|   ├── index.html  # Game interface structure
|   ├── style.css   # Game styles
|   ├── script.js   # Client-side logic (interaction and animation)
├── server.js       # Server-side (Node.js and Socket.IO)
└── README.md       # Project documentation
```

## 🌐 Tecnologias Utilizadas

- **HTML5** - Para a estrutura da página.
- **CSS3** - Para estilização e responsividade.
- **JavaScript** - Para a lógica do jogo no lado do cliente.
- **Node.js** - Para o servidor.
- **Socket.IO** - Para comunicação em tempo real.

## 📸 Demonstração

A interface do jogo é composta por três rolos e um botão de "Spin". O jogador clica no botão para girar os rolos. Se os três rolos exibirem o mesmo símbolo, o jogador ganha!

## 🤝 Contribuições

Contribuições são sempre bem-vindas! Sinta-se à vontade para abrir uma **issue** ou enviar um **pull request**.

## 📄 Licença

Este projeto está sob a licença MIT. Consulte o arquivo `LICENSE` para obter mais informações.

---

Desenvolvido com ❤️ por [Allan Barcelos](https://github.com/allanbarcelos).
