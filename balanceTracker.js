const transactions = [
  { type: "deposit", amount: 100 },
  { type: "withdrawal", amount: 30 },
   { type: "withdrawal", amount: 80 },
  { type: "deposit", amount: 50 }
]

const result = transactions.reduce((acc, t) => {
    const {type, amount} = t;

    if(type === "deposit") {
        acc.balance += amount;
    } else if (type === "withdrawal") {
        if (acc.balance >= amount) {
      acc.balance -= amount;
    } else {
      console.log("❌ Overdraft blocked:", amount);
    }
    }

    acc.history.push(acc.balance)
    return acc;

}, { balance: 0, history: [] });

console.log(result)