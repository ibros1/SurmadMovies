"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// declartions
const url = 'https://chatgpt-api7.p.rapidapi.com/ask';
const btnGenerate = document.querySelector('.generateBtn');
const inputEl = document.querySelector('.inputEl');
const responseEl = document.querySelector('.responseEl');
// functions
function generateAnswer(msg) {
    return __awaiter(this, void 0, void 0, function* () {
        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': 'YOUR_API_KEY',
                'X-RapidAPI-Host': 'chatgpt-api7.p.rapidapi.com',
            },
            body: JSON.stringify({
                query: msg,
            }),
        };
        const res = yield fetch(url, options);
        const data = yield res.json();
        console.log(data);
        if (data.response) {
            responseEl.textContent = data.response;
        }
        else {
            responseEl.textContent = 'Generated content';
        }
    });
}
// events
btnGenerate.addEventListener('click', () => {
    const inputValue = inputEl.value.trim();
    if (inputValue.length > 0) {
        responseEl.textContent = 'Generating...';
        generateAnswer(inputValue);
    }
    else {
        alert('You need to enter a question.');
    }
});
