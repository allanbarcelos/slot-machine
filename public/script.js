const socket = io();

// Symbols for the slot machine
const symbols = ["🍒", "🍋", "🍊", "🍉", "🍇", "⭐", "🔔", "7️⃣"];

const reels = [
    document.getElementById("reel1"),
    document.getElementById("reel2"),
    document.getElementById("reel3")
];
const spinButton = document.getElementById("spin-button");
const resultDisplay = document.getElementById("result");

resultDisplay.innerHTML = "&nbsp;";

// Function to get a random symbol
function getRandomSymbol() {
    return symbols[Math.floor(Math.random() * symbols.length)];
}

// Função para animar os rolos e exibir o resultado
function spinReels(results, message) {
    const reelResults = [];
    reels.forEach((reel, index) => {
        let count = 0;
        const interval = setInterval(() => {
            // Mostrar um símbolo aleatório enquanto gira
            reel.textContent = getRandomSymbol();
            count++;

            // Parar a animação após um determinado número de giros
            if (count >= 20 + index * 10) {
                clearInterval(interval);
                reelResults[index] = results[index];
                reel.textContent = reelResults[index];

                // Verificar se todos os rolos pararam
                if (reelResults.length === reels.length && !reelResults.includes(undefined)) {
                    resultDisplay.textContent = message;
                    spinButton.disabled = false;
                }
            }
        }, 100);
    });
}

// Quando o usuário clica no botão "Spin"
spinButton.addEventListener("click", () => {
    resultDisplay.textContent = "";
    spinButton.disabled = true;
    socket.emit("spin"); // Enviar solicitação para o servidor
});

// Receber o resultado do servidor
socket.on("spinResult", ({ results, message }) => {
    spinReels(results, message); // Iniciar a animação com os resultados do servidor
});
