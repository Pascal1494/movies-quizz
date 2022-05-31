let rand = tableauSongs[Math.floor(Math.random() * tableauSongs.length)];
console.log(rand);

const positionSong = tableauSongs.indexOf(rand);
console.log(positionSong);

let song = tableauSongs.slice();
console.log(song);

let songInPlay = rand + ".mp3";
console.log(songInPlay);
