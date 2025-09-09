class Cart {
    items = [];

    addItem (name, price) {
        this.items.push({ name, price });
    }

    listItems () {
        console.log("Cart Items: ", this.items);
    }

    calculateTotal (discount, tax) {
        const sum = this.items.reduce((acc, curr) => acc + curr.price ,0);
        const discountedSum = sum * (1 - discount / 100);
        const taxedSum = discountedSum * (1 + tax / 100);
        console.log("Total cost before discount: ", sum.toFixed(2));
        console.log("Total cost after discount: ", discountedSum.toFixed(2));
        console.log("Total cost after discount and tax : ", taxedSum.toFixed(2));
    }

    removeItem (name) {
        const idx = this.items.findIndex((i) => i.name === name);
        if(idx === -1) {
            console.log("item not found");
        }
        const removedItem = this.items.splice(idx, 1);
        console.log("Removed Item: ", removedItem);
    }
}

const cart = new Cart();

cart.addItem("apple", 25);
cart.addItem("banana", 10);
cart.addItem("watermelon", 7);

cart.calculateTotal(40, 25);

cart.removeItem("apple");

cart.listItems();
