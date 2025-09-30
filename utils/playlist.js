import getRandom from "./utils.js"

const playlist = [];

export default function createPlaylist(songs){
let playlist = [];
    if(actual_playlist!==null){
        playlist=actual_playlist
    }

    if(songs.length !== 0){

        let index_song = getRandom(songs.length);

        playlist.push(songs[index_song]);
        songs.splice(index_song, 1);
        return createPlaylist(songs,playlist);
    }

    return playlist;
}