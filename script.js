
let balance = 100;
let historyList = [];

function updateBalance() {
    document.getElementById("balance").innerText = balance;
}

function addMoney() {
    balance += 50;
    updateBalance();
    alert("₹50 added to your wallet!");
}

function withdraw() {
    if (balance >= 50) {
        balance -= 50;
        updateBalance();
        alert("₹50 withdrawn from your wallet!");
    } else {
        alert("Not enough balance to withdraw!");
    }
}

function spinWheel() {
    const outcomes = [10, 20, 0, 50, 0, 100];
    const result = outcomes[Math.floor(Math.random() * outcomes.length)];
    let message = "";

    if (result === 0) {
        message = "Better luck next time!";
    } else {
        balance += result;
        message = `🎉 You won ₹${result}!`;
    }

    updateBalance();
    document.getElementById("result").innerText = message;
    addToHistory(message);
}

function addToHistory(message) {
    historyList.unshift(message);
    const list = document.getElementById("historyList");
    list.innerHTML = "";
    historyList.slice(0, 5).forEach((entry) => {
        const li = document.createElement("li");
        li.innerText = entry;
        list.appendChild(li);
    });
}
