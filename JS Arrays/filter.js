const availableFoods = [
    {id: "qwe234dfh", name: "Burger", image:"🍔🍔", price: 234},
    {id: "qwe2356dxh", name: "pizza", image:"🍕🍕", price: 200},
    {id: "qwe2456yh", name: "meat", image:"🍖🍖", price: 500},
    {id: "qwe2785yh", name: "chicken", image:"🍗🍗", price: 1200},
]


const foodprice = availableFoods.filter((availableFoods)=>{
     return availableFoods.price >=450
})
const foodpriceArray = foodprice.map((foodprice) => {
    return foodprice.price
})
const totalBill = foodpriceArray.reduce((prev, next) =>{
    return prev+next
})

console.log(`my total bill above 450 is: ${totalBill}`)