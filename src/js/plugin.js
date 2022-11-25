//the value of userId which should be passed into the collect.js
"use strict";
import AcceptDialog from "../templates/AcceptDialog/AcceptDialog";

async function getUserId() {
    const resp = await fetch('https://www.uuidtools.com/api/generate/v4')
    const uids = await resp.json()
    return uids[0]
}
const refs ={
    pluginScript: document.querySelector('script[src="js/plugin.js"]'),
    collectScript: null,
    body: document.querySelector('body'),
    footer: document.querySelector('footer'),
    triangleButton: null,
    acceptModal: null
}

document.addEventListener("DOMContentLoaded", () => {
    initPlugin()
})

function initPlugin() {
    const isRunning = checkAttribute()
    if(isRunning === "false"){
        console.log('not running')
        return
    }
    createTriangleButton()
    createAcceptModal()
    implementClickTriangleButton()
}

function checkAttribute() {
return refs.pluginScript.getAttribute('isRunning')

}

function createTriangleButton() {
    const triangleButton = document.createElement('button')
    triangleButton.className = 'corner-button'
    refs.body.appendChild(triangleButton)
    refs.triangleButton = document.querySelector('.corner-button')
}

function createAcceptModal() {
    refs.body.insertAdjacentHTML('beforeend',AcceptDialog)
    refs.acceptModal = document.querySelector('#accept-modal')
}

function toggleAcceptModal() {
    if(refs.acceptModal.style.display === 'none'){
        refs.acceptModal.style.display = "block"
        refs.acceptModal.addEventListener('click', toggleAcceptModal)
        return
    }
    if(refs.acceptModal.style.display === "block"){
        refs.acceptModal.style.display = "none"
        refs.acceptModal.removeEventListener('click', toggleAcceptModal)
    }
}

function implementClickTriangleButton() {
    refs.triangleButton.addEventListener('click', toggleAcceptModal)
}


function addCollectScript() {
    if(refs.collectScript) {
        return
    }
    const newScript = document.createElement('script')
    import(/* webpackChunkName: "collect" */ './collect.js')
    refs.body.appendChild(newScript)
    newScript.src = 'js/collect.js'
    refs.collectScript = newScript
}