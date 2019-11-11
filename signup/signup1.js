// javascript for the first page of the sign-up process
function formCheck() {
    let error = 0;
    let errors = [];
    let errorMessage = "";
    // assigns all form elements to js variables
    let errorText = document.getElementById("error");
    let givenName = document.getElementById("gname").value;
    let familyName = document.getElementById("fname").value;
    let gender = document.getElementById("gender").value;
    let birthdate = document.getElementById("birthdate").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirm = document.getElementById("confirm").value;
    // checks all form elements for the correct content
    if(password !== confirm){
        error = 1;
        errors.push("Passwords do not match");
    }
    let upperCaseCount = 0;
    let numberCount = 0;
    for(i=0;i<password.length;i++){
        if(password[i]===password[i].toUpperCase()){upperCaseCount+=1;}
        if(parseInt(password[i]) >= 0){numberCount+=1;}
    }
    if(upperCaseCount < 1 || numberCount < 1){
        error = 1;
        errors.push("Password does not meet requirements");
    } else if(password.length < 8){
        error = 1;
        errors.push("Password does not meet requirements");
    }
    if(givenName.length < 1 || familyName.length < 1 || birthdate.length < 1 || email.length < 1){
        error = 1;
        errors.push("Required field has been left blank");
    }
    // writes each error message to a variable that is then placed in the html and shown beside the 'next' button
    for(i=0;i<errors.length;i++){
        errorMessage = errorMessage + errors[i] + "<br>";
    }
    errorText.innerHTML = errorMessage;
    if(error === 0){
        window.open("page2.html", "_top");
    }
}