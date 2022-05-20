const pass1 = document.getElementById("password");
const pass2 = document.getElementById("confirm_pass");
const pass = [pass1, pass2];

const input_error_text = document.getElementById("input_error");

pass.forEach(element => {
    element.addEventListener("input", ()=> {
        if (pass1.value !== pass2.value) {
            pass1.classList.add("invalid"); // makes the border red
            pass2.classList.add("invalid");
            input_error_text.textContent = "* Passwords do not match!"
        } else {
            pass1.classList.remove("invalid");
            pass2.classList.remove("invalid");
            input_error_text.textContent = "";
        }
    });
});