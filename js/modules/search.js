
export const searchUniqueTrack = async(query) => {
    let url = `https://spotify23.p.rapidapi.com/search/?q=${query}&type=tracks&offset=0&limit=1&numberOfTopResults=0`;
    let options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'ea6cd4dd0bmsh8413380809d711bp1b1736jsn8db2d953d8ab',
            'x-rapidapi-host': 'spotify23.p.rapidapi.com',
            'Content-Type': 'application/json'
        }
    };

    try {
        let response = await fetch(url, options);
        let result = await response.json();
        let dataUpdate = result.tracks.items[0].data.uri
        return dataUpdate
    } catch (error) {
        console.error(error);
    }
}

export const searchTracks = async(query) => {

}

export const searchAlbums = async(query) => {
    const url = `https://spotify23.p.rapidapi.com/search/?q=${query}&type=albums&offset=0&limit=6&numberOfTopResults=0`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'ea6cd4dd0bmsh8413380809d711bp1b1736jsn8db2d953d8ab',
            'x-rapidapi-host': 'spotify23.p.rapidapi.com',
            'Content-Type': 'application/json'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        let uris = []
        console.log(result)

        for (let album of result.albums.items) {
            uris.push(album.data.uri)
        }

        return uris
    } catch (error) {
        console.error(error);
    }
}