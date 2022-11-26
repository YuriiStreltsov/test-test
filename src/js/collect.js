//your code goes here

const USER_ID = document.querySelector('.accept-modal').dataset.userId

const data = {
    userId: USER_ID,
    date: "24.02.22",
    url: "google.com",
    uag: "chrome",
    uag_lang:"ua",
    location:"Ukraine"
}

async function postCollect() {
    const resp = await fetch('https://putsreq.herokuapp.com/ylG2esx9EkW77PmdnsUI', {
        method: 'POST',
        body: JSON.stringify(data)
    })
    return await resp.text()
}

postCollect().then((data) => {console.log(data)})