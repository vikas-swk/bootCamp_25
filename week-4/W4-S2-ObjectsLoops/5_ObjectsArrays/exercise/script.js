// create your coffee object array here
var customerOrder = [
    {
        customerName: "john",
        type: "espresso",
        milk: false,
    },
    {
        customerName: "jane",
        type: "latte",
        milk: true,
    },
    {
        customerName: "jack",
        type: "mocha",
        milk: true, 
    },
    {
        customerName: "jill",
        type: "americano",
        milk: false,
    },
];
// creat your print order function here
console.log(customerOrder);

var customer1 = customerOrder[0];
console.log(customer1.customerName + " ordered an " + customer1.type + " with " + (customer1.milk ? "milk" : "no milk") + ".");

var customer2 = customerOrder[1];
console.log(customer2.customerName + " ordered an " + customer2.type + " with " + (customer2.milk ? "milk" : "no milk") + ".");

var customer3 = customerOrder[2];
console.log(customer3.customerName + " ordered an " + customer3.type + " with " + (customer3.milk ? "milk" : "no milk") + ".");

var customer4 = customerOrder[3];
console.log(customer4.customerName + " ordered an " + customer4.type + " with " + (customer4.milk ? "milk" : "no milk") + ".");

for(var i = 0; i < customerOrder.length; i++){
    console.log(customerOrder[i].customerName + " ordered an " + customerOrder[i].type + " with " + (customerOrder[i].milk ? "milk." : "no milk."));
}

var customerGrocery = [
    {
        name: 'john',
        vegetables: ['Leek', 'Carrot', 'Onion'],
        fruits: ['Apple', 'Orange', 'Banana'],
        dairy: ['Milk', 'Cheese', 'Yogurt'],

    },
    {
        name: 'jane',
        vegetables: ['Leek', 'Carrot'],
        fruits: ['Banana', 'grapes', 'Watermelon'],
        dairy: false,
    },
]
for (var i = 0; i < customerGrocery.length; i++) {
    console.log(customerGrocery[i].name + " bought " + 
        (customerGrocery[i].vegetables.length > 0 ? "vegetables: " + customerGrocery[i].vegetables.join(', ') + ", " : "no vegetables, ") + "along with " +
        (customerGrocery[i].fruits.length > 0 ? "fruits: " + customerGrocery[i].fruits.join(', ') + ", " : "no fruits. ") + "and " +
        (customerGrocery[i].dairy ? "dairy: " + customerGrocery[i].dairy.join(', ') + "." : "no dairy.")
    );
}