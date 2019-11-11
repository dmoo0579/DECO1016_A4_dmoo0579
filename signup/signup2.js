// javascript for the first page of the sign-up process
function formCheck() {
    let error = 0;
    let errors = [];
    let errorMessage = "";
    // assigns all form elements to js variables
    let errorText = document.getElementById("error");
    let phone = document.getElementById("phone").value;
    let cardNumber = document.getElementById("card-number").value;
    let address1 = document.getElementById("address-1").value;
    let address2 = document.getElementById("address-2").value;
    let city = document.getElementById("city").value;
    // checks all form elements for the correct content
    
    if(cardNumber.length > 0 && cardNumber.length !== 8){
        error = 1;
        errors.push("Card Number must be 8 digits");
    }
    if(phone.length < 1 || address1.length < 1 || city.length < 1){
        error = 1;
        errors.push("Required field has been left blank");
    }
    // writes each error message to a variable that is then placed in the html and shown beside the 'next' button
    for(i=0;i<errors.length;i++){
        errorMessage = errorMessage + errors[i] + "<br>";
    }
    errorText.innerHTML = errorMessage;
    if(error === 0){
        window.open("page3.html", "_top");
    }
}