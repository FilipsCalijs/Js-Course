'use strict';



const inputRub = document.querySelector('#rub'),

     inputUsd = document.querySelector('#usd');


inputRub.addEventListener("input", () => {
    const request = new XMLHttpRequest();

    request.open("GET", "js/current.json");
    request.onreadystatechange("Content-type", "application/json; charset=utf-8");
    request.send();
});