
// let getEl = selector => document.querySelector(selector);
// getEl('.feedback-form').addEventListener('input', saveMessage);

import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');

form.addEventListener('input', throttle(onInput, 500));
form.addEventListener('submit', onSubmit);

let formData = {};
saveData();

function onInput(evt) {
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
    console.log(formData);
}

function onSubmit(evt) {
    evt.preventDefault();
    evt.currentTarget.reset();
    localStorage.removeItem('feedback-form-state');
}

function saveData() {
    const savedMessage = localStorage.getItem('feedback-form-state');
    const parseMessage = JSON.parse(savedMessage);
    if(parseMessage) {
        formData = parseMessage;
        input.value = formData.email || "";
        textarea.value = formData.message || "";
    }
}


