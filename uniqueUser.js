const transactions = [
  { userId: 1, amount: 100 },
  { userId: 2, amount: 200 },
  { userId: 1, amount: 100 }, // duplicate
  { userId: 3, amount: 50 }
];



const result = transactions.reduce((acc, t) => {
    const key = `${t.userId}_${t.amount}`;

    if(acc.seen.has(key)) {
        acc.duplicate.push(t);
    } else {
        acc.seen.add(key);
        acc.unique.push(t);
    }

    return acc;

}, {seen: new Set(), unique: [], duplicate: []})

console.log(result)