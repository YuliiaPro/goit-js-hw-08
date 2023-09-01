import throttle from "lodash.throttle";
const STORAGE_KEY = 'feedback-form-state';
let textStorage = { email: "", message: "" };

const refs = {
   form: document.querySelector('.feedback-form'),
   textarea: document.querySelector('.feedback-form textarea'),
   input: document.querySelector('.feedback-form input'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));
refs.input.addEventListener('input', throttle(onInputInput, 500));

populateTexterea();

function onFormSubmit(evt) {
    evt.preventDefault();
    console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
   textStorage = {email:"", message:""};
};

function onTextareaInput(e) {
    if (JSON.parse(localStorage.getItem(STORAGE_KEY))) {
        textStorage = JSON.parse(localStorage.getItem(STORAGE_KEY));
    };
    textStorage.message = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(textStorage));
};

function onInputInput(evt) {
  
    if (localStorage.getItem(STORAGE_KEY)) {
        textStorage = JSON.parse(localStorage.getItem(STORAGE_KEY));
    };
    textStorage.email = evt.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(textStorage));

};

function populateTexterea() {
    if (localStorage.getItem(STORAGE_KEY)) {
        const savedText = JSON.parse(localStorage.getItem(STORAGE_KEY));
        refs.input.value = savedText.email;
        refs.textarea.value = savedText.message;
  }
};

