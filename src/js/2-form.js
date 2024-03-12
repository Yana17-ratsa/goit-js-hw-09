// Використовуючи делегуваня, відстежуй на формі подію input і щоразу записуй у локальне сховище об'єкт з полями email і message, у яких зберігай поточні значення полів форми. Нехай ключем для сховища буде рядок "feedback-form-state".
// Під час завантаження сторінки перевіряй стан сховища, і якщо там є збережені дані, то заповнюй ними поля форми. В іншому випадку поля повинні бути порожніми.
// Під час сабміту форми очищай сховище і поля форми, а також виводь у консоль об'єкт з полями email, message та їхніми поточними значеннями.



const form = document.querySelector(".feedback-form");
const emailValue = form.elements.email;
const messageValue = form.elements.message;  
let info = { email: '', message: '', };


//Перший пункт
form.addEventListener("input", handleInput);

function handleInput(e) {
    e.preventDefault();
    const email = e.currentTarget.elements.email.value.trim();
    const message = e.currentTarget.elements.message.value.trim();
    info.email = email;
    info.message = message;

    localStorage.setItem("feedback-form-state", JSON.stringify(info));
}


//Другий пункт
const parsedInfo = JSON.parse(localStorage.getItem("feedback-form-state"));

if (parsedInfo !== null) {
    emailValue.value = parsedInfo.email;
    messageValue.value = parsedInfo.message;
    info = parsedInfo;
}

//Третій пункт
form.addEventListener("submit", submitHandle);

function submitHandle(event) { 
    event.preventDefault();
    console.log(info);
    localStorage.clear();
    info.email = '';
    info.message = '';
}
