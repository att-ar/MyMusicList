export enum Genre {
    GENERAL = "general",
    POP = "pop",
    KPOP = "kpop",
    JPOP = "jpop",
    RAP = "rap",
    HIPHOP = "hiphop",
    RNB = "rnb",
}

// interfaces

export interface Song {
    title: string;
    artist: string | Artist;
    image?: string;
    genres?: Genre[];
}

type ArtistSong = Omit<Song, "artist">;
type ArtistPlaylist = Omit<Playlist, "likes">;

export interface Artist {
    name: string;
    songs?: ArtistSong[];
    albums?: ArtistPlaylist[];
}

export interface Playlist {
    name: string;
    author: string;
    likes: number;
    genre: Genre[];
    songs: Song[];
}

export interface Person {
    name: string;
    username: string;
    password: string;
    id: string;
    friends: Friend[];
    playlists: Playlist[];
    likedPlaylists: Playlist[];
}

export type DiscoverablePerson = Omit<Person, "password">;
export type Friend = Pick<Person, "name" | "username">;
// used for the findPerson resolvers
export interface FindPersonArgs {
    username: string;
}

//types
