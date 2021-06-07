// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "Broccoli",
		lactosefree: true,
		nutfree: true,
        organic: false,
		price: 1.99
	},
	{
		name: "Bread",
		lactosefree: true,
		nutfree: true,
        organic: false,
		price: 2.35
	},
	{
		name: "Salmon",
		lactosefree: true,
		nutfree: true,
        organic: true,
		price: 10.00
	},
    {
        name: "Avocado",
        lactosefree: true,
        nutfree: true,
        organic: true,
        price: 4.99
    },
    {
        name: "Bagels",
        lactosefree: true,
        nutfree: false,
        organic: false,
        price: 2.45
    },
    {
        name: "Rotisserie Chicken",
        lactosefree: true,
        nutfree: true,
        organic: true,
        price: 6.50
    },
    {
        name: "Matcha Green Tea Haagen Dazs",
        lactosefree: false,
        nutfree: true,
        organic: false,
        price: 5.00
    },
    {
        name: "Milk",
        lactosefree: false,
        nutfree: true,
        organic: false,
        price: 5.10
    },
    {
        name: "Lactose Free Milk",
        lactosefree: true,
        nutfree: true,
        organic: true,
        price: 6.40
    },    
    {
        name: "Bacon",
        lactosefree: true,
        nutfree: true,
        organic: false,
        price: 13.99
    },
    {
        name: "Red Onion",
        lactosefree: true,
        nutfree: true,
        organic: true,
        price: 3.00
    },
    {
        name: "Potatoes",
        lactosefree: true,
        nutfree: true,
        organic: false,
        price: 4.99
    },
    {
        name: "Parmigiano-Reggiano",
        lactosefree: false,
        nutfree: true,
        organic: false,
        price: 8.10
    },
    {
        name: "Almonds",
        lactosefree: true,
        nutfree: false,
        organic: true,
        price: 10.50
    },
    {
        name: "Organic Milk",
        lactosefree: false,
        nutfree: true,
        organic: true,
        price: 5.99
    },
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction, organic) {
	var product_information = [];
    if (organic){

        for (let i=0; i<prods.length; i+=1) {
            if ((restriction == "lactosefree") && (prods[i].lactosefree) && (prods[i].organic)){
                product_information.push([prods[i].price, prods[i].name]);
            }
            else if ((restriction == "nutfree") && (prods[i].nutfree) && (prods[i].organic)){
                product_information.push([prods[i].price, prods[i].name]);
            }
            else if ((restriction == "None") && (prods[i].organic)){
                product_information.push([prods[i].price, prods[i].name]);
            }
        }
        return product_information.sort(function sortListProducts(valA, valB) {
            return valA[0] - valB[0];
        });

    }else{

        for (let i=0; i<prods.length; i+=1) {
            if ((restriction == "lactosefree") && (prods[i].lactosefree)){
                product_information.push([prods[i].price, prods[i].name]);
            }
            else if ((restriction == "nutfree") && (prods[i].nutfree)){
                product_information.push([prods[i].price, prods[i].name]);
            }
            else if (restriction == "None"){
                product_information.push([prods[i].price, prods[i].name]);
            }
        }
        return product_information.sort(function sortListProducts(valA, valB) {
            return valA[0] - valB[0];
        });
    }
}


// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){ 
            var productName = 
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}