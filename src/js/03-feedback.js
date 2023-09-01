import throttle from "lodash.throttle";
const STORAGE_KEY = 'feedback-form-state';
let textStorage ={message:"", email:""};
let savedStorage = JSON.parse(localStorage.getItem(STORAGE_KEY));

const refs = {
   form: document.querySelector('.feedback-form'),
   textarea: document.querySelector('.feedback-form textarea'),
   input: document.querySelector('.feedback-form input'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));
refs.input.addEventListener('input', throttle(onInputInput, 500));

populateTexterea();

function onFormSubmit(evt){
    evt.preventDefault();
    console.log(savedStorage);
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
};

function onTextareaInput(evt) {
    if (savedStorage) {
        textStorage = savedStorage;
    };

    textStorage.message = evt.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(textStorage));

};

function onInputInput(e) {
    if (savedStorage) {
        textStorage = savedStorage;
    };
    textStorage.email = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(textStorage));

};

function populateTexterea() {
    if (savedStorage) {
    refs.textarea.value = savedStorage.message;
    refs.input.value = savedStorage.email;
  }
};
