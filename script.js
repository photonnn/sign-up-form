const pass1 = document.getElementById("password");
const pass2 = document.getElementById("confirm_pass");

const input_error_text = document.getElementById("input_error");
const btn = document.getElementsByTagName("button");

btn[0].addEventListener("input", () => {
    if (pass1.value !== pass2.value) {
        pass1.classList.add("invalid");
        pass2.classList.add("invalid");   
        input_error_text.textContent = "* Passwords do not match!"     
    } else {
        pass1.classList.remove("invalid");
        pass2.classList.remove("invalid");
        input_error_text.textContent = "";
        console.log("UWU");
    }
});