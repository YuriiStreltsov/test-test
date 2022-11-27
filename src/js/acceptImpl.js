import AcceptDialog from "../templates/AcceptDialog/AcceptDialog";
import {disableScroll, enableScroll} from "./helpers/scrollControl";

function postCollect() {
    import(/* webpackChunkName: "collect" */ './collect.js')
        .then(module => module.postCollect()
            .then((message) => {console.log( message)})
        )
}

const refs ={
    body: document.querySelector('body'),
    accept: null,
    reject: null,
    acceptModal: null,
    collectScript: null,
}

export function createAcceptModal(userId) {
    refs.body.insertAdjacentHTML('beforeend',AcceptDialog)
    refs.acceptModal = document.querySelector('.accept-modal')
    refs.acceptModal.dataset.userId = userId
    refs.accept = document.querySelector('#accept')
    refs.reject = document.querySelector('#reject')
    refs.accept.addEventListener('click', onClickAccept)
    refs.reject.addEventListener('click', toggleAcceptModal)
    if(window.localStorage.getItem('collect')){
        refs.accept.disabled = true
    }
}

function onClickAccept() {
    if(window.localStorage.getItem('collect')){
        refs.accept.disabled = true
    }
    toggleAcceptModal()
    if(refs.collectScript) {
        postCollect()
        return
    }
    addCollectScript()
    postCollect()
}

function addCollectScript() {
    const newScript = document.createElement('script')
    refs.body.appendChild(newScript)
    newScript.src = 'js/collect.js'
    refs.collectScript = newScript
}

export function toggleAcceptModal() {
    refs.acceptModal.classList.toggle('hidden')
    if(refs.acceptModal.classList.contains('hidden')){
        enableScroll()
        return
    }
    disableScroll()
}