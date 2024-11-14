# Slot Machine Game 🎰
[Português](README.pt.md) | English

This is a simple Slot Machine project developed using HTML, CSS, JavaScript, and Node.js.

## 📝 Project Description

The project consists of a web application where users can interact with a slot machine. By clicking the **Spin** button, the reels spin, and if all symbols match, the player wins. The server-side is implemented using Node.js and Socket.IO for real-time communication.

### Features

- Stylish user interface with CSS animations.
- Interactive button to "spin" the reels.
- Real-time communication between client and server using Socket.IO.

## 🚀 How to Run the Project

### Prerequisites

Make sure you have Node.js installed on your machine. You can check using:

```bash
node -v
npm -v
```

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/allanbarcelos/slot-machine.git
    cd slot-machine
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

3. Start the server:

    ```bash
    node server.js
    ```

4. Open your browser and go to:

    ```
    http://localhost:3000
    ```

## 📂 Project Structure

```
.
├── /public
|   ├── index.html  # Game interface structure
|   ├── style.css   # Game styles
|   ├── script.js   # Client-side logic (interaction and animation)
├── server.js       # Server-side (Node.js and Socket.IO)
└── README.md       # Project documentation
```

## 🌐 Technologies Used

- **HTML5** - For structuring the page.
- **CSS3** - For styling and responsiveness.
- **JavaScript** - For the game logic on the client side.
- **Node.js** - For the server.
- **Socket.IO** - For real-time communication.

## 📸 Demo

The game interface consists of three reels and a "Spin" button. The player clicks the button to spin the reels. If all three reels display the same symbol, the player wins!

## 🤝 Contributions

Contributions are always welcome! Feel free to open an **issue** or submit a **pull request**.

## 📄 License

This project is licensed under the MIT License. See the `LICENSE` file for more information.

---

Developed with ❤️ by [Allan Barcelos](https://github.com/allanbarcelos).