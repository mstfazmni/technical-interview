const transactions = [
  { userId: 1, amount: 100, date: "2025-09-10" },
  { userId: 2, amount: 50, date: "2025-09-10" },
  { userId: 1, amount: 200, date: "2025-09-11" },
  { userId: 2, amount: 300, date: "2025-09-11" },
  { userId: 1, amount: 20, date: "2025-09-10" }
];

const groupByDate = transactions.reduce((acc, curr) => {
    const { amount, date } = curr;

    if (acc[date]) {
        acc[date] += amount;
    } else {
        acc[date] = amount;
    }

    return acc;
}, {});

console.log(groupByDate);

const groupByUserAndDate = transactions.reduce((acc, curr) => {
    const { userId, amount, date } = curr;
    const key = `${userId}_${date}`;
    if (acc[key]) {
        acc[key] += amount;
    } else {
        acc[key] = amount
    }

    return acc;
}, {});

console.log(groupByUserAndDate)