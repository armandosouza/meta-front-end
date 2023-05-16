const receipts = [{
	dish: "Italian pasta",
	price: 9.55
}, {
	dish: "Rice with veggies",
	price: 8.65
}, {
	dish: "Chicken with potatoes",
	price: 15.55
}, {
	dish: "Vegetarian Pizza",
	price: 6.45
}]

function receiptMaker(hasTax) {
	for(let i = 0; i < receipts.length; i++) {
		let price = hasTax ? receipts[i].price * 1.2 : receipts[i].price
		console.log(`Dish: ${receipts[i].dish} - Price: $${price}`)
	}
}

receiptMaker(true)