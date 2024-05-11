
export const searchUniqueTrack = async(query) => {
    let res = await (await fetch("http://localhost:5503/tracks")).json()
    let song = res.items[0].data.uri
    console.log(song)
    return song
}

export const searchTracks = async(query) => {
    let res = await (await fetch("http://localhost:5502/tracks")).json()
    let dataSongs = []
    res.items.forEach(item => {
        dataSongs.push(item.data.uri)
    })
    console.log(dataSongs)
    return dataSongs
}

export const searchAlbums = async(query) => {
    let res = await (await fetch("http://localhost:5501/albums")).json()
    let dataAlbums = []
    res.items.forEach(item => {
        dataAlbums.push(item.data.uri)
    })
    console.log(dataAlbums)
    return dataAlbums
}