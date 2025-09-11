const transactions = [
  { userId: 1, amount: 50 },
  { userId: 1, amount: 200 },
  { userId: 2, amount: 500 },
  { userId: 2, amount: 40 },
  { userId: 3, amount: 300 }
];

  const aboveThreshholdTranas = transactions.filter((transaction) => transaction.amount >= 100);
// console.log(aboveThreshholdTranas);

const TranGetter = aboveThreshholdTranas.reduce((acc, tran) => {
    const {userId, amount} = tran;
  

    if (acc[userId]) {
        acc[userId].count += 1;
        acc[userId].total += amount;
    } else {
        acc[userId] = {count: 1, total: amount};
    }

    return acc;
}, {})

console.log(TranGetter)

