
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
                <input type="password" class="password-Input password pass" placeholder="Password" required minlength="6" name="password">
                <img src="./resources/eye-close-1.png" class="eye" alt="">
                <span class="error"></span>
            </div>
            <div class="inputDiv">
                <input type="password" class="repeat-password pass" placeholder="Repeat Password" required minlength="6" name="repeat-password">
                <img src="./resources/eye-close-1.png" class="eye" alt="">
                <span class="error"></span>
            </div>
            
            <button type="submit" class="create-account-btn">Create account</button>
            <label for="terms"> <input type="checkbox" name="terms" class="terms-chekbox" required> By continuing i agree to the terms of use and Privacy Policy</label>
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
            <input type="email" class="email-input loginEmail" placeholder="Your email" required>
            <input type="password" class="password-input loginPassword" placeholder="Password" required>
            <button type="submit" class="logIn-btn">Login</button>
            <label for="terms"> <input type="checkbox" name="terms" class="terms-chekbox"> By continuing i agree to the terms of use and Privacy Policy</label>
            <p>Create a new account? <button class="signUP-btn">Click here</button></p>
        </form>
            

    </div>
`
const container = document.querySelector(".pop-up");
const signInButton = document.querySelector(".sign-in");
const overlay = document.querySelector("#overlay");

const userFormData = {
    firstName :"",
    lastname :"",
    email :"",
    password : "",
    repeatPassword : "",
}

let firstName = "";
let lastname = "";
let email = "";
let password = "";
let repeatPassword = "";

signInButton.addEventListener('click', ()=>loadPopup());

function loadPopup() {
    container.classList.add("active");
    container.innerHTML = signUpFormHtml;
    overlay.style.display = "block";
    overlay.style.pointerEvents = "all";
    handleSignInForm();

    document.querySelector(".login-btn").addEventListener('click', ()=>{
        loadLoginForm();
    })  
}




function handleSignInForm() {
    handlePasswordInput()
    closeForm();
    getValues();
}

function handlePasswordVisibility() {
    const eyeButtons = document.querySelectorAll(".eye");
    const textRepeatPassword = document.querySelector('.textRepeatPassword')
    const textPassword = document.querySelector('.textPassword')
    const passwordInputBox = document.querySelector(".password");
    const repeatPasswordInputBox = document.querySelector(".repeat-password");

    eyeButtons.forEach((btn, index)=>{
        btn.addEventListener('click', ()=>{
            
            if(btn.src.includes("eye-close-1.png")){ 
               btn.src = "../resources/eye1.png";
               if(index === 0){
                    textPassword.style.display = "inline-block";
                    textPassword.value = passwordInputBox.value;
                    passwordInputBox.value = "";
                    passwordInputBox.style.display = "none";
               }else{
                    textRepeatPassword.style.display = "inline-block";
                    textRepeatPassword.value = repeatPasswordInputBox.value;
                    repeatPasswordInputBox.value = "";
                    repeatPasswordInputBox.style.display = "none";
               }
               
            }else{
                btn.src = "../resources/eye-close-1.png";
                btn.type = "password"
                if(index === 0){
                    passwordInputBox.value = textPassword.value;
                    textPassword.value = "";
                    textPassword.style.display = "none";
                    passwordInputBox.style.display = "inline-block";
               }else{
                    repeatPasswordInputBox.value = textRepeatPassword.value;
                    textRepeatPassword.value = ""
                    textRepeatPassword.style.display = "none";
                    repeatPasswordInputBox.style.display = "inline-block";
               }
            }
  
        })
    })
   
}

function handlePasswordInput() {
    //handlePasswordVisibility();
    const passwordInputBox = document.querySelectorAll(".password");
    const repeatPasswordInputBox = document.querySelectorAll(".repeat-password");
    const errorSpans = document.querySelectorAll(".error");

    repeatPasswordInputBox.forEach((input)=>{
        input.addEventListener('keyup', ()=>{
            password = passwordInputBox[0].value ? passwordInputBox[0].value : passwordInputBox[1].value;
            if(input.value.length >= password.length || input.value.length >= password.length){
                password = passwordInputBox[0].value ? passwordInputBox[0].value : passwordInputBox[1].value;
                repeatPassword = input.value;
                
                if(password !== repeatPassword){
                    errorSpans[3].innerHTML = "The passwords do not match";
                    errorSpans[4].innerHTML = "The passwords do not match";
                    document.querySelectorAll(".password").forEach((input)=>input.addEventListener('keyup', ()=>errorSpans[3].innerHTML = ""))
                    document.querySelectorAll(".repeat-password").forEach((input)=>input.addEventListener('keyup', ()=>errorSpans[4].innerHTML = ""))
                    getInput();
                }else{
                    console.log("passwords do match")
                }
            }
        })
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

        if(password !== repeatPassword){
            document.querySelector(".password").value = ""
            document.querySelector(".repeat-password").value = ""
            errorSpans[3].innerHTML = "The passwords do not match";
            errorSpans[4].innerHTML = "The passwords do not match";
            
            document.querySelector(".password").addEventListener('keyup', ()=>errorSpans[3].innerHTML = "")
            document.querySelector(".repeat-password").addEventListener('keyup', ()=>errorSpans[4].innerHTML = "")
            getInput();
        }else{
            console.log("all values captured")
        }

    })   
}

let loginEmail = "";
let loginPassword = "";

function loadLoginForm(){
    container.innerHTML = logInFormHtml;
    closeForm();
    document.querySelector("#loginForm").addEventListener('submit', (e)=>{
        e.preventDefault();
        loginEmail = document.querySelector('.loginEmail').value.trim();
        loginPassword = document.querySelector('.loginPassword').value.trim();
        console.log(loginEmail, loginPassword);
    })

    document.querySelector(".signUP-btn").addEventListener('click', ()=>{
        container.innerHTML = signUpFormHtml;
        closeForm();
    })
}





