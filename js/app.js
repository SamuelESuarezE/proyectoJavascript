import { MusicCard } from "./components/MusicCard.js";
import { SearchBar } from "./components/SearchBar.js";
import { CurrentTrack } from "./components/CurrentTrack.js";
import {
  searchUniqueTrack,
  searchTracks,
  searchAlbums,
} from "./modules/search.js";
// await searchUniqueTrack()
// await searchTracks()
// await searchAlbums()

const searchBars = document.querySelectorAll("search-bar");
// console.log(searchBars[0].shadowRoot.children[2].children[1])

// Con esto accedo al input que esta dentro del componenete
searchBars[0].shadowRoot.children[2].children[1].addEventListener(
  "keyup",
  async function (e) {
    if (e.keyCode===13) {
      // Value dentro del input
      let query = e.target.value;
      // Funcion que recibe el query y consulta la search en el api, devuelve un array de uris de albumes
      let dataAlbums = await searchAlbums(query);
      let albumContainer = document.querySelector(".albumContainer");
      albumContainer.innerHTML = "";

      for (let album in dataAlbums) {
        // Creo un nuevo componente de tipo music-card
        let musicCard = document.createElement("music-card");
        // Agrego el atributo uri al componente
        musicCard.setAttribute("uri", dataAlbums[album]);
        // Agrego el componente al html
        albumContainer.appendChild(musicCard);
      }
    }
  }
);

searchBars[2].shadowRoot.children[2].children[1].addEventListener(
    "keyup",
    async function (e) {
      if (e.keyCode===13) {
        // Value dentro del input
        let query = e.target.value;
        // Funcion que recibe el query y consulta la search en el api, devuelve un array de uris de albumes
        let dataTracks = await searchTracks(query);
        let tracksContainer = document.querySelector(".tracksContainer");
        tracksContainer.innerHTML = "";
  
        for (let track in dataTracks) {
          // Creo un nuevo componente de tipo music-card
          let musicCard = document.createElement("music-card");
          // Agrego el atributo uri al componente
          musicCard.setAttribute("uri", dataTracks[track]);
          // Agrego el componente al html
          tracksContainer.appendChild(musicCard);
        }
      }
    }
  );

// Evento busqueda current track
searchBars[1].shadowRoot.children[2].children[1].addEventListener(
  "keyup",
  async function (e) {
    if (e.keyCode===13) {
      let query = e.target.value;
      let dataSong = await searchUniqueTrack(query);
      let currentTrackFrame = document.querySelector("current-track-frame");
      let currentTrackContainer = document.querySelector("#currentTrack");
      currentTrackFrame.remove();

      currentTrackFrame.setAttribute("uri", dataSong);
      currentTrackContainer.appendChild(currentTrackFrame);
    }
  }
);


async function allRandom() {
  let albumsRandom = generarRandom(6);
  let songRandom = generarRandom(6);
  let tracksRandom = generarRandom(6);

  let dataSong = await searchUniqueTrack(songRandom);
  let currentTrackFrame = document.createElement("current-track-frame");
  let currentTrackContainer = document.querySelector("#currentTrack");
  
  currentTrackFrame.setAttribute("uri", dataSong);
  currentTrackContainer.appendChild(currentTrackFrame);



    let dataAlbums = await searchAlbums(albumsRandom);
    let albumContainer = document.querySelector(".albumContainer");
  
  
    for (let album in dataAlbums) {
      // Creo un nuevo componente de tipo music-card
      setTimeout(function() {
        let musicCard = document.createElement("music-card");
        // Agrego el atributo uri al componente
        musicCard.setAttribute("uri", dataAlbums[album]);
        // Agrego el componente al html
        albumContainer.appendChild(musicCard);
      }, 500)

    }




    let dataTracks = await searchTracks(tracksRandom);
    let tracksContainer = document.querySelector(".tracksContainer");
  
  
    for (let track in dataTracks) {
      setTimeout(function() {
        // Creo un nuevo componente de tipo music-card
        let musicCard = document.createElement("music-card");
        // Agrego el atributo uri al componente
        musicCard.setAttribute("uri", dataTracks[track]);
        // Agrego el componente al html
        tracksContainer.appendChild(musicCard);
      }, 500)
    }

}

function generarRandom(num) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let result = "";
  for (let i = 0; i < num; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}

allRandom()