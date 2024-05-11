import { MusicCard } from "./components/MusicCard.js";
import { SearchBar } from "./components/SearchBar.js";
import { CurrentTrack } from "./components/CurrentTrack.js";
import { searchUniqueTrack, searchTracks, searchAlbums } from "./modules/search.js";
// await searchUniqueTrack()
// await searchTracks()
// await searchAlbums()

const searchBars = document.querySelectorAll("search-bar");
// console.log(searchBars[0].shadowRoot.children[2].children[1])


searchBars[0].shadowRoot.children[2].children[1].addEventListener("keyup", async function(e) {
    if (e.key === "Enter") {
        let query = e.target.value
        let dataSongs = await searchTracks(query)
        let albumContainer = document.querySelector('.albumContainer')
        for (let song in dataSongs) {
            let musicCard = document.createElement("music-card")
            musicCard.setAttribute("uri", dataSongs[song])
            albumContainer.appendChild(musicCard)
        }
    }

})

// Evento busqueda current track
searchBars[1].shadowRoot.children[2].children[1].addEventListener("keyup", async function(e) {
    if (e.key === "Enter") {
        let query = e.target.value
        let dataSong = await searchUniqueTrack(query)
        let currentTrackFrame = document.querySelector('current-track-frame')
        let currentTrackContainer = document.querySelector('#currentTrack')
        currentTrackFrame.remove()
        
        currentTrackFrame.setAttribute("uri", dataSong)
        currentTrackContainer.appendChild(currentTrackFrame)
    }

})
