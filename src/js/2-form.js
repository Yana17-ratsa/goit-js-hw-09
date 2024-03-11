const form = document.querySelector(".feedback-form");
const emailElem = form.elements.email.value;
const messageElem = form.elements.message.value;

console.log(messageElem);
form.addEventListener("input", handleInput);

function handleInput(event) {

    const info = {
        email: emailElem,
        message: messageElem,
    }
    
    

    // localStorage.setItem("feedback-form-state", JSON.stringify(info));


}