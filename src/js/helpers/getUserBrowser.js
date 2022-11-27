export function getUserBrowser() {
    const regexFindNameBrowser = /(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i
    const matches =  navigator.userAgent.match(regexFindNameBrowser)
    return matches[1]
}