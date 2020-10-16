/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getEscapeRoom = /* GraphQL */ `
  query GetEscapeRoom($id: ID!) {
    getEscapeRoom(id: $id) {
      id
      name
      author
      riddles {
        items {
          id
        }
        nextToken
      }
    }
  }
`;
export const listEscapeRooms = /* GraphQL */ `
  query ListEscapeRooms(
    $filter: ModelEscapeRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEscapeRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        author
        riddles {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getEscapeRoomRiddles = /* GraphQL */ `
  query GetEscapeRoomRiddles($id: ID!) {
    getEscapeRoomRiddles(id: $id) {
      id
      escaperoom {
        id
        name
        author
        riddles {
          nextToken
        }
      }
      riddle {
        id
        name
        difficulty
        category
        EscapeRoom {
          nextToken
        }
      }
    }
  }
`;
export const listEscapeRoomRiddless = /* GraphQL */ `
  query ListEscapeRoomRiddless(
    $filter: ModelEscapeRoomRiddlesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEscapeRoomRiddless(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        escaperoom {
          id
          name
          author
        }
        riddle {
          id
          name
          difficulty
          category
        }
      }
      nextToken
    }
  }
`;
export const getRiddle = /* GraphQL */ `
  query GetRiddle($id: ID!) {
    getRiddle(id: $id) {
      id
      name
      difficulty
      category
      EscapeRoom {
        items {
          id
        }
        nextToken
      }
    }
  }
`;
export const listRiddles = /* GraphQL */ `
  query ListRiddles(
    $filter: ModelRiddleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRiddles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        difficulty
        category
        EscapeRoom {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getSeed = /* GraphQL */ `
  query GetSeed($id: ID!) {
    getSeed(id: $id) {
      id
      escaperoomid
      seed
    }
  }
`;
export const listSeeds = /* GraphQL */ `
  query ListSeeds(
    $filter: ModelSeedFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSeeds(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        escaperoomid
        seed
      }
      nextToken
    }
  }
`;
