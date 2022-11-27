export const getLocation = async () => {
        const pos = await new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
        }).catch(error=> {
            console.log(error.message)})
    if (!pos) {
        return 'Unknown'
    }
    const location = await reverseGeocoding(pos.coords.longitude, pos.coords.latitude)
    if(!location){
        return 'Unknown'
    }
    return `Country: ${location.countryName}, City: ${location.city}`
};

async function reverseGeocoding(latitude, longitude) {
    return await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?
      latitude=${latitude}&longitude=${longitude}`)
        .then( res => res.json())
        .then(response =>
             response)
        .catch(status => {
            console.log(status)
        })
}