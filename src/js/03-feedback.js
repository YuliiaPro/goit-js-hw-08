import throttle from 'lodash.throttle';
//const STORAGE_KEY = "feedback-form-state";

const refs = {
   form: document.querySelector('.feedback-form'),
   textarea: document.querySelector('.feedback-form textarea'),
 input: document.querySelector('.feedback-form input'),
};
//const formData = {};

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));
refs.input.addEventListener('input', throttle(onInput, 500));

populateTexterea();


  localStorage.setItem(LOCALSTORAGE_KEY, form.elements.message.value);
 

// refs.form.addEventListener('input', e => {
//     formData[e.target.name] = e.target.value;
//     console.log(formData);
// });

function onFormSubmit(evt){
     evt.preventDefault();
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
//    // storageText ={message:"", email:""};
//     //console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
}



function populateTexterea() {
const savedMassege = JSON.parse(localStorage.getItem(STORAGE_KEY));



//     //const savedMassege = JSON.parse(localStorage.getItem(STORAGE_KEY));
//     const savedMassege = localStorage.getItem(storageText.message);
//     const savedEmail = localStorage.getItem(STORAGE_KEY);
//     if (savedMassege) {
//         console.log(savedMassege);
//         console.log(savedEmail);
//         //refs.textarea.value = savedMassege;

//         //refs.textarea.value = savedMassege.message;
//     //refs.input.value = savedMassege.email;
//     }
    
 };

//===============================================================

// import throttle from 'lodash.throttle';

// const STORAGE_KEY = "feedback-form-state";
// const refs = {
//    form: document.querySelector('.feedback-form'),
//    textarea: document.querySelector('.feedback-form textarea'),
//    input: document.querySelector('.feedback-form input'),
// };
// //const formData = {};

// refs.form.addEventListener('submit', onFormSubmit);
// refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));
// refs.input.addEventListener('input', throttle(onInputInput, 500));
// // refs.form.addEventListener('input', e => {
// //     formData[e.target.name] = e.target.value;
// //     console.log(formData);
// //});


// populateTexterea();
// let storageText ={message:"", email:""};

// function onFormSubmit(evt){
//     evt.preventDefault();
//     evt.currentTarget.reset();
//     localStorage.removeItem(STORAGE_KEY);
//    // storageText ={message:"", email:""};
//     //console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
  
// };

// function onTextareaInput(evt) {
//     const message = evt.target.value;
//     storageText.message = localStorage.setItem(STORAGE_KEY, message);
    

//     // storageText.message = evt.target.value;
//      //localStorage.setItem(STORAGE_KEY, message);
//     //localStorage.setItem(STORAGE_KEY, JSON.stringify(storageText));
    
    
//     // if (localStorage.getItem(STORAGE_KEY)) {
//     //     textForStorage = JSON.parse(localStorage.getItem(STORAGE_KEY));
//     // };

//     // textForStorage.message = e.target.value;
//     // localStorage.setItem(STORAGE_KEY, JSON.stringify(textForStorage));

// };

// function onInputInput(e) {
//    // storageText.email = e.target.value;
//    // localStorage.setItem(STORAGE_KEY, JSON.stringify(storageText));

// //     if (localStorage.getItem(STORAGE_KEY)) {
// //         textForStorage = JSON.parse(localStorage.getItem(STORAGE_KEY));
// //     };
// //     textForStorage.email = evt.target.value;
// //     localStorage.setItem(STORAGE_KEY, JSON.stringify(textForStorage));

// };
// function populateTexterea() {
//     //const savedMassege = JSON.parse(localStorage.getItem(STORAGE_KEY));
//     const savedMassege = localStorage.getItem(storageText.message);
//     const savedEmail = localStorage.getItem(STORAGE_KEY);
//     if (savedMassege) {
//         console.log(savedMassege);
//         console.log(savedEmail);
//         //refs.textarea.value = savedMassege;

//         //refs.textarea.value = savedMassege.message;
//     //refs.input.value = savedMassege.email;
//     }
    
// };
