
const signUpFormHtml = `
    <div class="sign-up-popup-container">
        <div class="signUp-header">
            <h2>Sign up</h2>
            <button class="close-signUp-btn close-btn">&times;</button>
        </div>
        
        <form action="" id = "signInForm">
            <div class="inputDiv">
                <input type="text" class="name-input firstName" placeholder="First name" required minlength="3" name="firstName">
            <span class="error"></span>
            </div>
            <div class="inputDiv">
                <input type="text" class="name-input lastName" placeholder="Last name" required minlength="3" name="lastName">
                <span class="error"></span>
            </div>
            <div class="inputDiv">
                <input type="email" class="email pass" placeholder="Your email" required minlength="5" name="email">
                <span class="error"></span>
            </div>
            <div class="inputDiv">
                <input type="password" class="password-Input password pass" placeholder="Password" required minlength="5" name="password">
                <span class="error"></span>
            </div>
            <div class="inputDiv">
                <input type="password" class="repeat-password pass" placeholder="Repeat Password" required minlength="5" name="repeat-password">
                <span class="error"></span>
            </div>
            
            <button type="submit" class="create-account-btn">Create account</button>
            <label for="terms"> <input type="checkbox" name="terms" class="terms-chekbox"> By continuing i agree to the terms of use and Privacy Policy</label>
            <p>Already have an account? <button class="login-btn">Login here</button></p>
        </form>
    </div>
`

const logInFormHtml = `
    <div class="logIn-container">
        <div class="logIn-header">
            <h2>Login up</h2>
            <button class="close-Login-btn close-btn">&times;</button>
        </div>
        <form action="" id = "loginForm">
            <span class="error"></span>
            <input type="email" class="email-input loginEmail" placeholder="Your email" required>
            <input type="password" class="password-input loginPassword" placeholder="Password" required>
            <button type="submit" class="logIn-btn">Login</button>
            <a href="#" class="forgotPassBtn">Forgot password?</a>
            <p>Create a new account? <button class="signUP-btn">Click here</button></p>
        </form>
            

    </div>
`
const container = document.querySelector(".pop-up");
const signInButton = document.querySelector(".sign-in");
const overlay = document.querySelector("#overlay");
const loginHeaderButton = document.querySelector(".log-in-btn");

const userFormData = {
    firstName :"",
    lastname :"",
    email :"",
    password : "",
}

let firstName = "";
let lastname = "";
let email = "";
let password = "";
let repeatPassword = "";

signInButton.addEventListener('click', ()=>loadPopup());
loginHeaderButton.addEventListener('click', ()=>loadLoginForm())

function loadPopup() {
    container.classList.add("active");
    overlay.style.display = "block";
    overlay.style.pointerEvents = "all";
    loadSignInForm(); 
}




function loadSignInForm() {
    container.innerHTML = signUpFormHtml;
    closeForm();
    getValues();
    document.querySelector(".login-btn").addEventListener('click', ()=>{
        loadLoginForm();
    }) 
}

function closeForm() {
    document.querySelector(".close-btn").addEventListener('click', ()=>{
        container.classList.remove("active");
        container.innerHTML = "";
        overlay.style.display = "none";
        overlay.style.pointerEvents = "none";
    }) 
}

let errorSpans;


function getValues(){
    getInput(); 
}



function getInput() {
    const firstNameInputBox = document.querySelector(".firstName");
    const lastnameInputBox = document.querySelector(".lastName");
    const emailInputBox = document.querySelector(".email");
    const passwordInputBox = document.querySelector(".password");
    const repeatPasswordInputBox = document.querySelector(".repeat-password");
    errorSpans = document.querySelectorAll(".error");
    const signInForm = document.querySelector("#signInForm");

    signInForm.addEventListener('submit', (e)=>{
        e.preventDefault();
        firstName = firstNameInputBox.value.trim();
        lastname = lastnameInputBox.value.trim();
        email = emailInputBox.value.trim();
        password = passwordInputBox.value.trim();
        repeatPassword = repeatPasswordInputBox.value.trim();

        console.log("hello")
        if(password !== repeatPassword){
            document.querySelector(".password").value = ""
            document.querySelector(".repeat-password").value = ""
            errorSpans[3].innerHTML = "The passwords do not match";
            errorSpans[4].innerHTML = "The passwords do not match";
            
            document.querySelector(".password").addEventListener('keyup', ()=>errorSpans[3].innerHTML = "")
            document.querySelector(".repeat-password").addEventListener('keyup', ()=>errorSpans[4].innerHTML = "")
            getInput();
        }else{
            userFormData.firstName = firstName;
            userFormData.lastname = lastname;
            userFormData.email = email;
            userFormData.password = password;
            console.log(userFormData);
            logInUser();
            logOutUser();

            container.classList.remove("active");
            container.innerHTML = "";
            overlay.style.display = "none";
            overlay.style.pointerEvents = "none";
        }

    })   
}

let loginEmail = "";
let loginPassword = "";

function loadLoginForm(){
    container.classList.add("active");
    container.innerHTML = logInFormHtml;
    overlay.style.display = "block";
    overlay.style.pointerEvents = "all";
    closeForm();
    document.querySelector("#loginForm").addEventListener('submit', (e)=>{
        e.preventDefault();
        loginEmail = document.querySelector('.loginEmail').value.trim();
        loginPassword = document.querySelector('.loginPassword').value.trim();
        console.log(loginEmail, loginPassword);

        container.classList.remove("active");
        container.innerHTML = "";
        overlay.style.display = "none";
        overlay.style.pointerEvents = "none";
        logInUser()
        logOutUser()
    })

    document.querySelector(".signUP-btn").addEventListener('click', ()=>{
        container.innerHTML = signUpFormHtml;
        closeForm();
    })
}



function logInUser() {
    document.querySelector(".log-in-btn").style.display = "none"
    document.querySelector(".sign-in").style.display = "none"
    document.querySelector(".log-out-btn").style.display = "inline-block"
    document.querySelector(".user-profile").style.display = "inline-block";  
}

function logOutUser() {
    console.log('hello');
    document.querySelector(".log-out-btn").addEventListener('click', ()=>{
        console.log('hello');
        document.querySelector(".log-in-btn").style.display = "inline-block"
        document.querySelector(".sign-in").style.display = "inline-block"
        document.querySelector(".log-out-btn").style.display = "none"
        document.querySelector(".user-profile").style.display = "none"; 
    })  
}


const proceedToCheckOutBtn = document.querySelector(".proceedToCheckOutBtn");

proceedToCheckOutBtn.addEventListener('click', ()=>{
    window.location.href = 'myOrderPage.html';
})






