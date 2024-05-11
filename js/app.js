import { MusicCard } from "./components/MusicCard.js";
import { SearchBar } from "./components/SearchBar.js";
import { CurrentTrack } from "./components/CurrentTrack.js";
import { searchUniqueTrack, searchTracks, searchAlbums } from "./modules/search.js";
await searchUniqueTrack()
await searchTracks()
await searchAlbums()