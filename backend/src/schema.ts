const typeDefs = `
  type Song {
    title: String!
    artist: String!
    image: String
    genres: [String]
  }
  type Playlist {
    name: String!
    author: String!
    genre: String!
    songs: [Song]!
  }
  type Friend {
    name: String!
    username: String!
  }
  type Person {
    name: String!
    username: String!
    password: String!
    friends: [Friend]!
    playlists: [Playlist]!
    id: ID!
  }

  type Query {
    personCount: Int!
    allPersons: [Person!]!
    findPerson(username: String!): Person
  }
`;

export default typeDefs;
