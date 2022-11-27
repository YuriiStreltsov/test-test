async function postCollect() {
        const userId = document.querySelector('.accept-modal').dataset.userId
        const date = new Date(Date.now())
        const url = document.location.href
        const uag = getUserBrowser()
        const uag_lang = navigator.language
        const location = "Ukraine"

    const data = {userId, date, url, uag, uag_lang, location,}

    // geoFindMe()

    function geoFindMe() {
        const coordinates = []
        if (!navigator.geolocation){
            console.log("Geolocation is not supported by your browser");
            return ;
        }
        function success(position) {
            coordinates.push(position.coords.latitude, position.coords.longitude)
            console.log(coordinates)
            return coordinates
        }
        function error() {
            console.log("Unable to retrieve your location");
        }
        navigator.geolocation.getCurrentPosition(success, error);
    }

    function getUserBrowser() {
        const regexFindNameBrowser = /(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i
        const matches =  navigator.userAgent.match(regexFindNameBrowser)
        return matches[1]
    }

    const response = await fetch('https://putsreq.herokuapp.com/ylG2esx9EkW77PmdnsUI', {
        method: 'POST',
        body: JSON.stringify(data)
    })
    return response.text()
}

export default postCollect