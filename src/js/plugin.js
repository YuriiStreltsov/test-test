//the value of userId which should be passed into the collect.js
"use strict";
async function getUserId() {
    const resp = await fetch('https://www.uuidtools.com/api/generate/v4')
    const uids = await resp.json()
    return uids[0]
}
const refs ={
    body: document.querySelector('body'),
    footer: document.querySelector('footer'),
    triangleButton: null
}

document.addEventListener("DOMContentLoaded", () => {
    initPlugin()
})

function initPlugin() {
    createTriangleButton()
    implementClickTriangleButton()
}

function createTriangleButton() {
    const triangleButton = document.createElement('button')
    triangleButton.className = 'corner-button'
    refs.body.appendChild(triangleButton)
    refs.triangleButton = document.querySelector('.corner-button')
}

function createAcceptModal() {
    const modalOverlay = document.createElement('div')
}

function toggleAcceptModal() {

}

function implementClickTriangleButton() {
    refs.triangleButton.addEventListener('click', addCollectScript)
}

function addCollectScript() {
    const script = document.createElement('script')
    refs.body.appendChild(script)
    script.src = 'js/collect.js'
}