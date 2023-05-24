import { Person, Genre } from "../src/types";

let persons: Person[] = [
    {
        name: "Aly",
        username: "llyyaa",
        password: "password",
        id: "3d594650-3436-11e9-bc57-8b80ba54c431",
        friends: [{ name: "Matt", username: "dk_matty" }],
        playlists: [],
        likedPlaylists: [],
    },
    {
        name: "Matt",
        username: "dk_matty",
        password: "password",
        id: "3d599470-3436-11e9-bc57-8b80ba54c431",
        friends: [{ name: "Aly", username: "llyyaa" }],
        playlists: [
            {
                name: "Favourites",
                author: "dk_matty",
                likes: 1,
                genre: [Genre.GENERAL],
                songs: [
                    {
                        title: "Paris in the Rain",
                        artist: "Lauv",
                        genres: [Genre.POP],
                    },
                    {
                        title: "Us",
                        artist: "Keshi",
                        genres: [Genre.POP],
                    },
                ],
            },
        ],
        likedPlaylists: [],
    },
    {
        name: "Han",
        username: "hanskz",
        password: "password",
        id: "3d599471-3436-11e9-bc57-8b80ba54c431",
        friends: [],
        playlists: [
            {
                name: "Seoul Society",
                author: "hanskz",
                likes: 2,
                genre: [Genre.KPOP],
                songs: [
                    {
                        title: "Ready To Love",
                        artist: "Seventeen",
                        genres: [Genre.KPOP],
                    },
                    {
                        title: "Thirsty",
                        artist: "aespa",
                        genres: [Genre.KPOP],
                    },
                ],
            },
        ],
        likedPlaylists: [],
    },
];

export default persons;
