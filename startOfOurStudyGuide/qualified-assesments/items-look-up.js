let items = [
  {
    itemName: "Effective Programming Habits",
    type: "book",
    price: 13.99
  },
  {
    itemName: "Creation 3005",
    type: "computer",
    price: 299.99
  },
  {
    itemName: "Finding Your Center",
    type: "book",
    price: 15.00
  }
]


let duplicates = [
  {
    itemName: "Creation 3005",
    type: "computer",
    price: 10.99
  },
  {
    itemName: "Creation 3005",
    type: "computer",
    price: 299.99
  },
  {
    itemName: "Finding Your Center",
    type: "book",
    price: 15.00
  }
];

function priceLookup(items, stringItemName) { //create function with 2 parameters
  let numberPriceOfItem = 0;//make an empty variable for the number

  for (let i = 0; i < items.length; i++) {//for loop to iterate through the the items array
    if (items[i].itemName === stringItemName) {// if the names match then do the folloing action
      return numberPriceOfItem = items[i].price;//get prices for the names
    }
  }

  return undefined;
}


console.log(priceLookup(items, "to"));
