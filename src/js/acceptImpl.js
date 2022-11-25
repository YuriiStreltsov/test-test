import AcceptDialog from "../templates/AcceptDialog/AcceptDialog";
import {userId} from "./plugin";

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
    refs.reject.addEventListener('click', toggleAcceptModal)
    refs.accept.addEventListener('click', addCollectScript)
}

export function toggleAcceptModal() {
    refs.acceptModal.classList.toggle('hidden')
    if(refs.acceptModal.classList.contains('hidden')){
        enableScroll()
        return
    }
    disableScroll()
}

function disableScroll() {
    const topScroll = window.scrollY || document.documentElement.scrollTop
    const leftScroll = window.scrollX || document.documentElement.scrollLeft

    window.onscroll = function() {
        window.scrollTo(leftScroll, topScroll);
    };
}

function enableScroll() {
    window.onscroll = () => {}
}

function addCollectScript() {
    toggleAcceptModal()
    if(refs.collectScript) {
        return
    }
    const newScript = document.createElement('script')
    import(/* webpackChunkName: "collect" */ './collect.js')
    refs.body.appendChild(newScript)
    newScript.src = 'js/collect.js'
    refs.collectScript = newScript
}
