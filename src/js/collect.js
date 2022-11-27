import {getLocation} from "./helpers/getLocation";
import {getUserBrowser} from "./helpers/getUserBrowser";

export async function postCollect() {
    const data = {
        userId: document.querySelector('.accept-modal').dataset.userId,
        date: new Date(Date.now()),
        url: document.location.href,
        uag: getUserBrowser(),
        uag_lang: navigator.language,
        location: await getLocation(),
    }
    const response = await fetch('https://putsreq.herokuapp.com/ylG2esx9EkW77PmdnsUI', {
        method: 'POST',
        body: JSON.stringify(data)
    }).then((data)=> {
        window.localStorage.setItem('collect', 'accepted')
        return data
    })
    return response.text()
}