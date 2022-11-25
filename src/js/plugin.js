//the value of userId which should be passed into the collect.js
import {createAcceptModal, toggleAcceptModal} from "./acceptImpl";

async function getUserId() {
    const resp = await fetch('https://www.uuidtools.com/api/generate/v4')
    const uids = await resp.json()
    return uids[0]
}

const refs ={
    pluginScript: document.querySelector('script[src="js/plugin.js"]'),
    body: document.querySelector('body'),
    footer: document.querySelector('footer'),
    triangleButton: null,
}

document.addEventListener("DOMContentLoaded", () => {
    initPlugin()
})

function initPlugin() {
    const isRunning = refs.pluginScript.getAttribute('isRunning')
    if(isRunning === "false"){
        console.log('not running')
        return
    }
    createTriangleButton()
    getUserId().then((userID) => {
        createAcceptModal(userID)
        onClickTriangleButton()
    })

}

function createTriangleButton() {
    const triangleButton = document.createElement('button')
    triangleButton.className = 'corner-button'
    refs.body.appendChild(triangleButton)
    refs.triangleButton = document.querySelector('.corner-button')
}

function onClickTriangleButton() {
    refs.triangleButton.addEventListener('click', toggleAcceptModal)
}