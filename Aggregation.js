const { use } = require("react");

const arr = [
  { userId: 1, type: "deposit", amount: 100 },
  { userId: 1, type: "withdrawal", amount: 30 },
  { userId: 2, type: "deposit", amount: 200 },
  { userId: 1, type: "deposit", amount: 50 }
];

const totalBalance = arr.reduce((acc, sale) => {
    const {userId, type , amount} = sale;

    if (!acc[userId]) acc[userId] = 0;
    
    if (type === "deposit") {
        acc[userId] += amount;
    } else if (type === "withdrawal") {
        acc[userId] -= amount;
    } 

    return acc;
}, {})

console.log(totalBalance)