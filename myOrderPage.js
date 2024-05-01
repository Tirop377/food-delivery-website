const updateInfoBtn = document.querySelector('.updateInfoBtn');
const form = document.querySelector('.main');
const firstNameInputBox = document.querySelector('.firstNameInputBox');
const lastNameInputBox = document.querySelector('.firstNameInputBox');
const areaNameInputBox = document.querySelector('.firstNameInputBox');
const streetInputBox = document.querySelector('.firstNameInputBox');
const buildingInputBox = document.querySelector('.firstNameInputBox');
const phoneNumberInputBox = document.querySelector('.firstNameInputBox');

updateInfoBtn.addEventListener('click', ()=>{
    form.classList.toggle('form')
    phoneNumberInputBox.focus();
})

form.addEventListener('submit', ()=>{
    let fistName = firstNameInputBox.value.trim();
    let lastName = lastNameInputBox.value.trim();
    let areaName = areaNameInputBox.value.trim();
    let streetName = streetInputBox.value.trim();
    let buildingName = buildingInputBox.value.trim();
    let phoneNumber = phoneNumberInputBox.valur.trim();

    console.log(fistName, lastName, areaName, streetName, buildingName, phoneNumber);

    form.style.display = "none"  
})

const imageContainer = document.querySelector(".con");
const imageInput = document.querySelector(".imageInput");

let newImageName;
imageInput.addEventListener('change', ()=>{
    imageContainer.src = URL.createObjectURL(imageInput.files[0]);
    console.log(URL.createObjectURL(imageInput.files[0]));
    newImageName = imageInput.files[0].name;
})