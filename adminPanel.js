//add item area
const imageContainer = document.querySelector(".proImage");
const imageInput = document.querySelector(".imageInput");

let newImageName;
imageInput.addEventListener('change', ()=>{
    imageContainer.src = URL.createObjectURL(imageInput.files[0]);
    console.log(URL.createObjectURL(imageInput.files[0]));
    newImageName = imageInput.files[0].name;
})

const addFoodItemHtml = document.querySelector(".addFoodItem");
const sideBarAddBtn = document.querySelector(".addItems-sideBar-button");
sideBarAddBtn.addEventListener('click', ()=>{
    addFoodItemHtml.style.display = "block";
    ordersDisplayHtml.style.display = "none";
    listAllItemsHtml.style.display = "none";
})

const addFoodButton = document.querySelector(".addFoodItemButton");

addFoodButton.addEventListener('click', (e)=>{
    e.preventDefault()
    const foodName = document.querySelector("#foodName").value.trim();
    const foodDescription = document.querySelector("#description").value.trim();
    const foodCategory = document.querySelector("#category").value.trim();
    const foodPrice = document.querySelector("#price").value;

    let foodObject = {
        _id: "30",
        name: foodName,
        image: newImageName,
        price: foodPrice,
        description: foodDescription,
        category: foodCategory
    }

    food_list.push(foodObject);
    alert("food item added successfuly")
})



// orders area
const ordersDisplayHtml = document.querySelector(".ordersDisplay");
const sideBarOrdersBtn = document.querySelector(".orders-sideBar-button");

sideBarOrdersBtn.addEventListener('click', ()=>{
    ordersDisplayHtml.style.display = "block";
    addFoodItemHtml.style.display = "none";
    listAllItemsHtml.style.display = "none";
})







//all items area

const food_list = [
    {
        _id: "1",
        name: "Greek salad",
        image: "food_1",
        price: 12,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Salad"
    },
    {
        _id: "2",
        name: "Veg salad",
        image: "food_2",
        price: 18,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Salad"
    }, {
        _id: "3",
        name: "Clover Salad",
        image: "food_3",
        price: 16,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Salad"
    }, {
        _id: "4",
        name: "Chicken Salad",
        image: "food_4",
        price: 24,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Salad"
    }, {
        _id: "5",
        name: "Lasagna Rolls",
        image: "food_5",
        price: 14,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Rolls"
    }, {
        _id: "6",
        name: "Peri Peri Rolls",
        image: "food_6",
        price: 12,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Rolls"
    }, {
        _id: "7",
        name: "Chicken Rolls",
        image: "food_7",
        price: 20,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Rolls"
    }, {
        _id: "8",
        name: "Veg Rolls",
        image: "food_8",
        price: 15,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Rolls"
    }, {
        _id: "9",
        name: "Ripple Ice Cream",
        image: "food_9",
        price: 14,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Deserts"
    }, {
        _id: "10",
        name: "Fruit Ice Cream",
        image: "food_10",
        price: 22,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Deserts"
    }, {
        _id: "11",
        name: "Jar Ice Cream",
        image: "food_11",
        price: 10,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Deserts"
    }, {
        _id: "12",
        name: "Vanilla Ice Cream",
        image: "food_12",
        price: 12,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Deserts"
    },
    {
        _id: "13",
        name: "Chicken Sandwich",
        image: "food_13",
        price: 12,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Sandwich"
    },
    {
        _id: "14",
        name: "Vegan Sandwich",
        image: "food_14",
        price: 18,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Sandwich"
    }, {
        _id: "15",
        name: "Grilled Sandwich",
        image: "food_15",
        price: 16,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Sandwich"
    }, {
        _id: "16",
        name: "Bread Sandwich",
        image: "food_16",
        price: 24,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Sandwich"
    }, {
        _id: "17",
        name: "Cup Cake",
        image: "food_17",
        price: 14,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Cake"
    }, {
        _id: "18",
        name: "Vegan Cake",
        image: "food_18",
        price: 12,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Cake"
    }, {
        _id: "19",
        name: "Butterscotch Cake",
        image: "food_19",
        price: 20,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Cake"
    }, {
        _id: "20",
        name: "Sliced Cake",
        image: "food_20",
        price: 15,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Cake"
    }, {
        _id: "21",
        name: "Garlic Mushroom ",
        image: "food_21",
        price: 14,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Pure Veg"
    }, {
        _id: "22",
        name: "Fried Cauliflower",
        image: "food_22",
        price: 22,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Pure Veg"
    }, {
        _id: "23",
        name: "Mix Veg Pulao",
        image: "food_23",
        price: 10,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Pure Veg"
    }, {
        _id: "24",
        name: "Rice Zucchini",
        image: "food_24",
        price: 12,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Pure Veg"
    },
    {
        _id: "25",
        name: "Cheese Pasta",
        image: "food_25",
        price: 12,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Pasta"
    },
    {
        _id: "26",
        name: "Tomato Pasta",
        image: "food_26",
        price: 18,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Pasta"
    }, {
        _id: "27",
        name: "Creamy Pasta",
        image: "food_27",
        price: 16,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Pasta"
    }, {
        _id: "28",
        name: "Chicken Pasta",
        image: "food_28",
        price: 24,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Pasta"
    }, {
        _id: "29",
        name: "Buttter Noodles",
        image: "food_29",
        price: 14,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Noodles"
    }, {
        _id: "30",
        name: "Veg Noodles",
        image: "food_30",
        price: 12,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Noodles"
    }, {
        _id: "31",
        name: "Somen Noodles",
        image: "food_31",
        price: 20,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Noodles"
    }, {
        _id: "32",
        name: "Cooked Noodles",
        image: "food_32",
        price: 15,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Noodles"
    }
]

const listAllItemsHtml = document.querySelector(".listAllitems");
const sideBarListItemsBtn = document.querySelector(".sideBar-listItems-button");
const itemsContainer = document.querySelector(".itemsContainer");
let listHtml ="";
let listdeleteButtons;
let foodItemContainers;

sideBarListItemsBtn.addEventListener('click', ()=>{
    generateListHtml();
    itemsContainer.innerHTML = listHtml;
    listAllItemsHtml.style.display = "block";
    listdeleteButtons = document.querySelectorAll(".deleteButton");
    foodItemContainers = document.querySelectorAll(".foodItem");
    handleDeleteItem();
    ordersDisplayHtml.style.display = "none";
    addFoodItemHtml.style.display = "none";
    updateItemName();
    updateItemCategory();
    updateItemPrice();
})

function updateItemName() {
    const updateNameButtons = document.querySelectorAll(".updateNameButton");
    const itemNameSpans = document.querySelectorAll(".itemName");
    const itemNameInputs = document.querySelectorAll(".itemNameInput");
    const saveUpdateNameButtons = document.querySelectorAll(".saveUpdateNameButton");

    updateNameButtons.forEach((btn, index)=>{
        btn.addEventListener('click', ()=>{
            itemNameSpans[index].style.display = "none"
            updateNameButtons[index].style.display = "none"
            itemNameInputs[index].style.display = "inline-block"
            saveUpdateNameButtons[index].style.display = "inline-block"

            saveUpdateNameButtons[index].addEventListener('click', ()=>{
                itemNameSpans[index].style.display = "inline-block"
                updateNameButtons[index].style.display = "inline-block"
                itemNameSpans[index].innerHTML = itemNameInputs[index].value;
                itemNameInputs[index].style.display = "none"
                saveUpdateNameButtons[index].style.display = "none"
            })
        })
    })
}

function updateItemCategory() {
    const updateCategoryButtons = document.querySelectorAll(".updateCategoryButton");
    const itemCategorySpans = document.querySelectorAll(".itemCategory");
    const itemCategoryInputs = document.querySelectorAll(".itemCategoryInput");
    const saveUpdateCategoryButtons = document.querySelectorAll(".saveUpdateCategoryButton");

    updateCategoryButtons.forEach((btn, index)=>{
        btn.addEventListener('click', ()=>{
            itemCategorySpans[index].style.display = "none"
            updateCategoryButtons[index].style.display = "none"
            itemCategoryInputs[index].style.display = "inline-block"
            saveUpdateCategoryButtons[index].style.display = "inline-block"

            saveUpdateCategoryButtons[index].addEventListener('click', ()=>{
                itemCategorySpans[index].style.display = "inline-block"
                updateCategoryButtons[index].style.display = "inline-block"
                itemCategorySpans[index].innerHTML = itemCategoryInputs[index].value;
                itemCategoryInputs[index].style.display = "none"
                saveUpdateCategoryButtons[index].style.display = "none"
            })
        })
    })
}

function updateItemPrice() {
    const updatePriceButtons = document.querySelectorAll(".updatePriceButton");
    const itemPriceSpans = document.querySelectorAll(".itemPrice");
    const itemPriceInputs = document.querySelectorAll(".itemPriceInput");
    const saveUpdatePriceButton = document.querySelectorAll(".saveUpdatePriceButton");

    updatePriceButtons.forEach((btn, index)=>{
        btn.addEventListener('click', ()=>{
            itemPriceSpans[index].style.display = "none"
            updatePriceButtons[index].style.display = "none"
            itemPriceInputs[index].style.display = "inline-block"
            saveUpdatePriceButton[index].style.display = "inline-block"

            saveUpdatePriceButton[index].addEventListener('click', ()=>{
                itemPriceSpans[index].style.display = "inline-block"
                updatePriceButtons[index].style.display = "inline-block"
                itemPriceSpans[index].innerHTML = `Ksh ${(parseInt(itemPriceInputs[index].value)).toFixed(2)}`;
                itemPriceInputs[index].style.display = "none"
                saveUpdatePriceButton[index].style.display = "none"
            })
        })
    })
}
function generateListHtml() {
    food_list.forEach((item)=>{
        let foodDiv = `
            <div class="foodItem">
                    <div>
                        <img src="./resources/foods-images/${item.image}.png" alt="">
                    </div>
                    <div class="name">
                        <span class="itemName">${item.name}</span>
                        <button class="updateNameButton btn">update</button>
                        <input type="text" class="itemNameInput" value="${item.name}">
                        <button class="saveUpdateNameButton btn">save</button>
                    </div>
                    <div class="category">
                        <span class="itemCategory">${item.category}</span>
                        <button class="updateCategoryButton btn">update</button>
                        <select name="itemCategoryInput" id="itemCategoryInput" value="${item.category}" class="itemCategoryInput">
                            <option value="Salad">Salad</option>
                            <option value="Rolls">Rolls</option>
                            <option value="Deserts">Mercedes</option>
                            <option value="Sandwich">Sandwich</option>
                            <option value="Cake">Cake</option>
                            <option value="Pure Veg">Pure Veg</option>
                            <option value="Pasta">Pasta</option>
                            <option value="Noodles">Noodles</option>
                        </select> 
                        <button class="saveUpdateCategoryButton btn">save</button> 
                    </div>
                    <div class="total-price">
                        <span class="itemPrice">Ksh ${(item.price*10).toFixed(2)}</span>
                        <button class="updatePriceButton btn">update</button>
                        <input type="number" class="itemPriceInput" value="${(item.price*10).toFixed(2)}">
                        <button class="saveUpdatePriceButton btn">save</button> 
                    </div>
                    <div>
                        <button class="deleteButton">&times;</button> 
                    </div>
            </div>
        `

       listHtml += foodDiv;
    })  
}

function handleDeleteItem(){
    listdeleteButtons.forEach((btn, index)=>{
        btn.addEventListener('click', ()=>{
            food_list.slice(index, 1);
            foodItemContainers[index].remove();
        })
    })
}




