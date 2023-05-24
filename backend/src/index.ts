import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const books = [
    {
        title: "The Awakening",
        author: "Kate Chopin",
    },
    {
        title: "City of Glass",
        author: "Paul Auster",
    },
];

const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Book {
    title: String
    author: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    books: [Book]
  }
`;

// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
const resolvers = {
    Query: {
        books: () => books,
    },
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
    typeDefs,
    resolvers,
});

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);

// import { ApolloServer } from "@apollo/server";
// import { startStandaloneServer } from "@apollo/server/standalone";
// import * as dotenv from "dotenv";
// dotenv.config();
// import axios from "axios";

// import resolvers from "./resolvers";
// import typeDefs from "./schema";
// import { Person, Genre } from "./types";

// //the "Bearer ..." token
// // could technically make this user later
// interface MyContext {
//     currentUser: Person | undefined;
//     token?: string;
// }

// const server = new ApolloServer<MyContext>({
//     typeDefs,
//     resolvers,
// });

// const { url } = await startStandaloneServer(server, {
//     context: async ({ req }) => {
//         // Get the user token from the headers.
//         const token = req.headers.authorization || null;
//         console.log(token);

//         // Try to retrieve a user with the token
//         // if (token && token.startsWith("Bearer ")) {
//         //     const decodedToken = jwt.verify(
//         //         token.substring(7),
//         //         process.env.JWT_SECRET
//         //     );
//         //     const currentUser = await User.findById(decodedToken.id).populate(
//         //         "friends"
//         //     );
//         // }
//         const currentUser = {
//             name: "Matt",
//             username: "dk_matty",
//             password: "password",
//             id: "3d599470-3436-11e9-bc57-8b80ba54c431",
//             friends: [{ name: "Aly", username: "llyyaa" }],
//             playlists: [
//                 {
//                     name: "Favourites",
//                     author: "dk_matty",
//                     likes: 1,
//                     genre: [Genre.GENERAL],
//                     songs: [
//                         {
//                             title: "Paris in the Rain",
//                             artist: "Lauv",
//                             genres: [Genre.POP],
//                         },
//                         {
//                             title: "Us",
//                             artist: "Keshi",
//                             genres: [Genre.POP],
//                         },
//                     ],
//                 },
//             ],
//             likedPlaylists: [],
//         };
//         const currentCreds = await axios.post(
//             "https://accounts.spotify.com/api/token",
//             {
//                 grant_type: "client_credentials",
//                 client_id: process.env.CLIENT_ID,
//                 client_secret: process.env.CLIENT_SECRET,
//             },
//             {
//                 headers: {
//                     "Content-Type": "application/x-www-form-urlencoded",
//                 },
//             }
//         );

//         // Add the user and the spotify-api token to the context
//         return { currentUser, currentCreds };
//     },
// });

// console.log(`Server ready at ${url}`);
