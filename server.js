const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const PORT = 3000;

app.use(express.static(`${__dirname}/public`));

// Symbols for the slot machine
const symbols = ["🍒", "🍋", "🍊", "🍉", "🍇", "⭐", "🔔", "7️⃣"];

// Function to get a random symbol
function getRandomSymbol() {
    return symbols[Math.floor(Math.random() * symbols.length)];
}

// Function to spin the reels
function spinReels() {
    const results = [getRandomSymbol(), getRandomSymbol(), getRandomSymbol()];
    const isJackpot = results[0] === results[1] && results[1] === results[2];
    const message = isJackpot ? "🎉 JACKPOT! You Win! 🎉" : "Try Again!";
    return { results, message };
}

// Handle connection from clients
io.on("connection", (socket) => {
    console.log("A user connected:", socket.id);

    socket.on("spin", () => {
        const spinResult = spinReels();
        socket.emit("spinResult", spinResult);
    });

    socket.on("disconnect", () => {
        console.log("User disconnected:", socket.id);
    });
});

// Start the server
server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
