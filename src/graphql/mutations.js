/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createEscapeRoom = /* GraphQL */ `
  mutation CreateEscapeRoom(
    $input: CreateEscapeRoomInput!
    $condition: ModelEscapeRoomConditionInput
  ) {
    createEscapeRoom(input: $input, condition: $condition) {
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
export const updateEscapeRoom = /* GraphQL */ `
  mutation UpdateEscapeRoom(
    $input: UpdateEscapeRoomInput!
    $condition: ModelEscapeRoomConditionInput
  ) {
    updateEscapeRoom(input: $input, condition: $condition) {
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
export const deleteEscapeRoom = /* GraphQL */ `
  mutation DeleteEscapeRoom(
    $input: DeleteEscapeRoomInput!
    $condition: ModelEscapeRoomConditionInput
  ) {
    deleteEscapeRoom(input: $input, condition: $condition) {
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
export const createEscapeRoomRiddles = /* GraphQL */ `
  mutation CreateEscapeRoomRiddles(
    $input: CreateEscapeRoomRiddlesInput!
    $condition: ModelEscapeRoomRiddlesConditionInput
  ) {
    createEscapeRoomRiddles(input: $input, condition: $condition) {
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
export const updateEscapeRoomRiddles = /* GraphQL */ `
  mutation UpdateEscapeRoomRiddles(
    $input: UpdateEscapeRoomRiddlesInput!
    $condition: ModelEscapeRoomRiddlesConditionInput
  ) {
    updateEscapeRoomRiddles(input: $input, condition: $condition) {
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
export const deleteEscapeRoomRiddles = /* GraphQL */ `
  mutation DeleteEscapeRoomRiddles(
    $input: DeleteEscapeRoomRiddlesInput!
    $condition: ModelEscapeRoomRiddlesConditionInput
  ) {
    deleteEscapeRoomRiddles(input: $input, condition: $condition) {
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
export const createRiddle = /* GraphQL */ `
  mutation CreateRiddle(
    $input: CreateRiddleInput!
    $condition: ModelRiddleConditionInput
  ) {
    createRiddle(input: $input, condition: $condition) {
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
export const updateRiddle = /* GraphQL */ `
  mutation UpdateRiddle(
    $input: UpdateRiddleInput!
    $condition: ModelRiddleConditionInput
  ) {
    updateRiddle(input: $input, condition: $condition) {
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
export const deleteRiddle = /* GraphQL */ `
  mutation DeleteRiddle(
    $input: DeleteRiddleInput!
    $condition: ModelRiddleConditionInput
  ) {
    deleteRiddle(input: $input, condition: $condition) {
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
export const createSeed = /* GraphQL */ `
  mutation CreateSeed(
    $input: CreateSeedInput!
    $condition: ModelSeedConditionInput
  ) {
    createSeed(input: $input, condition: $condition) {
      id
      escaperoomid
      seed
    }
  }
`;
export const updateSeed = /* GraphQL */ `
  mutation UpdateSeed(
    $input: UpdateSeedInput!
    $condition: ModelSeedConditionInput
  ) {
    updateSeed(input: $input, condition: $condition) {
      id
      escaperoomid
      seed
    }
  }
`;
export const deleteSeed = /* GraphQL */ `
  mutation DeleteSeed(
    $input: DeleteSeedInput!
    $condition: ModelSeedConditionInput
  ) {
    deleteSeed(input: $input, condition: $condition) {
      id
      escaperoomid
      seed
    }
  }
`;
