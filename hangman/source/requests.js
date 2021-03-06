const getPuzzle = async (wordCount) => {
    const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`);
    if(response.status === 200) {
        const data = await response.json();
        return data.puzzle;
    } else {
        throw new Error('Unable to fetch puzzle');
    }
}

const getCurrentCountry = async () => {
    const location = await getLocation();
//the bottom two lines can be shortened to
//  return getCountry(location.country);
    const country = await getCountry(location.country);
    return country;
}

const getCountry = async (countryCode) => {
    const response = await fetch('http://restcountries.eu/rest/v2/all');
    if(response.status === 200) {
        const data = await response.json();
        return country = data.find((country) => country.alpha2Code === countryCode);
    } else {
        throw new Error('Unable to get country');
    }
}

const getLocation = async () => {
    const response = await fetch('https://ipinfo.io/json?token=e1bb4a6a4526e5')
        if (response.status === 200) {
//you don't need to await something to return it
            return response.json();
        } else {
            throw new Error('Unable to get location from IP')
        }
}

export { getPuzzle as default };