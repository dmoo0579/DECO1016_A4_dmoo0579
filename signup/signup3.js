// javascript for the first page of the sign-up process
function formCheck() {
    let error = 0;
    let errors = [];
    let errorMessage = "";
    // assigns all form elements to js variables
    let errorText = document.getElementById("error");
    let code = document.getElementById("code").value;
    // checks all form elements for the correct content
    if(code.length !== 4){
        error = 1;
        errors.push("Verification Code must be 4 digits");
    }
    // writes each error message to a variable that is then placed in the html and shown beside the 'next' button
    for(i=0;i<errors.length;i++){
        errorMessage = errorMessage + errors[i] + "<br>";
    }
    errorText.innerHTML = errorMessage;
    if(error === 0){
        window.open("page4.html", "_top");
    }
}