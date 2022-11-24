//the value of userId which should be passed into the collect.js
"use strict";
async function getUserId() {
    const resp = await fetch('https://www.uuidtools.com/api/generate/v4')
    const uids = await resp.json()
    return uids[0]
}

// document.addEventListener("DOMContentLoaded", () => {
//     function addTriangleButton() {
//         const bodyEl = document.querySelector('body')
//         const htmlButtonString = '<div class="corner-button">Test button</div>'
//         const buttonElement = document.createElement('button')
//         buttonElement.innerHTML = htmlButtonString
//         bodyEl.appendChild(buttonElement)
//     }
//
//     addTriangleButton()
// })
