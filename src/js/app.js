import '../scss/app.scss';

document.addEventListener("DOMContentLoaded", () => {
    function addTriangleButton() {
        const bodyEl = document.querySelector('body')
        const htmlButtonString = '<button class="corner-button"></button>'
        bodyEl.insertAdjacentHTML('afterend', htmlButtonString)
    }

    addTriangleButton()
})