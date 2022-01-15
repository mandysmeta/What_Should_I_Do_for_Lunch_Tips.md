const library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
};

/////////////////////////////
// FUNCTIONS TO IMPLEMENT: //
/////////////////////////////

// ✔️prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
const printPlaylists = function() {
       for (let playListName in library.playlists) {
          const playListObject = library.playlists[playListName];
          console.log(playListObject.id + ': ' + playListObject.name + ' - ' + playListObject.tracks)

       }
}
printPlaylists(library);

// ✔️prints a list of all tracks, using the following format:
// t01: Code Monkey(name) by Jonathan Coulton(artist) (Thing a Week Three)(album)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
const printTracks = function() {
      for (let trackName in library.tracks) {
        const trackObject = library.tracks[trackName];
        console.log(trackObject.id + ': ' + trackObject.name + ' by ' + trackObject.artist + ' (' + trackObject.album + ')');
      }
}
printTracks(library);

// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

const printPlaylist = function(playlistId) {
       
// select the correct playlist based on parameter passed in
const playlist = library.playlists[playlistId]
const playlistString = playlist
// access the array so we can loop on it
const songs = playlist.tracks
       for (const arrItem of songs ) {
              // access the tracks object using the key from the array
              const songObj = library.tracks[arrItem];
              // console.log("songObj:",songObj)
              //create output string for song info
              const outputString = songObj.id + ": " + songObj.name + " by " + songObj.artist + " (" + songObj.album + ")"
              console.log(outputString)
       }
}
printPlaylist('p01') 


// adds an existing track to an existing playlist
const addTrackToPlaylist = function(trackId, playlistId) {

}


// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
const generateUid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


// adds a track to the library
const addTrack = function(name, artist, album) {

}


// adds a playlist to the library
const addPlaylist = function(name) {

}

