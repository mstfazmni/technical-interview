let userAccounts = [
    {
        id: 1,
        balance: 0,
        transaction: []
    },
    {
        id: 2,
        balance: 0,
         transaction: []
    }
];

const depositMoney = ( id, amount) => {
    const user = getUserAccount(id);
    const newBalance = user.balance += amount;

    user.transaction.push({ type: "Deposit", amount: amount, balance: newBalance });

    displayTransactionHistory(user);

    console.log(`Deposit into user: ${user.id} amount: ${amount} new balance: ${user.balance}`);
    return newBalance;
}


const withdrawMoney = (id, amount) => {
    const user = getUserAccount(id);
    if (user.balance < amount) throw new Error("exceeding the balance limit!");
    const newBalance = user.balance -= amount;

    user.transaction.push({ type: "Withdrawl", amount: amount, balance: newBalance});

    displayTransactionHistory(user);

    console.log(`Withdraw from user: ${user.id} amount: ${amount} new balance: ${user.balance}`);
    return newBalance;
}

const displayBalance = (id) => {
    const user = getUserAccount(id);
    console.log(`Balance for user: ${user.id} is $${user.balance}`);
}

const getUserAccount = (id) => {
    const user = userAccounts.find((account) => account.id === id);
    if (!user) throw new Error("user not found");
    return user;
}

const displayTransactionHistory = (user) => {
    user.transaction.map((t) => (
        console.log(`type: ${t.type}, amount: $${t.amount}, resulting balance: $${t.balance}`)
    ));
}

console.log(depositMoney(1 ,50));
console.log(depositMoney(2 ,10));



// withdrawMoney(2, 12);
withdrawMoney(1, 20);

displayBalance(1);
displayBalance(2);