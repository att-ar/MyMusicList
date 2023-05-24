// import axios from "axios";
// import * as dotenv from "dotenv";
// // import path from "path";
// dotenv.config();
// { path: path.resolve(process.cwd(), ".env") }
import { FindPersonArgs } from "./types";
import persons from "../data/persons";

// i need express for the API calls
// const searchAPI = async (query: string, type: string) => {
//     const uri = `https://api.spotify.com/v1/search?q=${query}&type=${type}&limit=10`;
//     const response = axios.get(uri, {
//         headers: {
//             Authorization: ""
//         }
//     })
// }

const resolvers = {
    Query: {
        personCount: () => persons.length,
        allPersons: () => persons,
        findPerson: (_root: any, args: FindPersonArgs) =>
            persons.find((p) => p.username === args.username),
    },
    Mutation: {},
};

export default resolvers;
