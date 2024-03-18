const trackTypeDefs = `#graphql

    # Base schema with common fields
    type Base {
        id: ID!
        createdAt: String!
        updatedAt: String!
    }

    # Track schema extending Base
    type Track {
        id: ID!
        createdAt: String!
        updatedAt: String!
        name: String!
        artists: [String]!
        duration: Int!
        ISRC: String!
        releaseDate: String!
    }

    # Root Query
    type Query {
        # Example query to retrieve a track by ID
        getTrackById(id: ID!): Track
        getTrackByNameAndArtist(name: String!, artists: [String]!): [Track]
        getAllTracks: [Track]
    }

    # Root Mutation
    type Mutation {
        # Example mutation to create a new track
        createTrack(
            name: String!,
            artists: [String]!,
            duration: Int!,
            ISRC: String!,
            releaseDate: String!
        ): Track
        updateTrackById(
            id: ID!,
            name: String!,
            artists: [String]!,
            duration: Int!,
            ISRC: String!,
            releaseDate: String!
        ): Track
        deleteTrackById(id: ID!): Track
    }
`;

export default trackTypeDefs;