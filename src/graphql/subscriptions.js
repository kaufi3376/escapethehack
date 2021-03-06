/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateEscapeRoom = /* GraphQL */ `
  subscription OnCreateEscapeRoom {
    onCreateEscapeRoom {
      id
      name
      seed
      author
      duration
      riddles {
        items {
          id
        }
        nextToken
      }
    }
  }
`;
export const onUpdateEscapeRoom = /* GraphQL */ `
  subscription OnUpdateEscapeRoom {
    onUpdateEscapeRoom {
      id
      name
      seed
      author
      duration
      riddles {
        items {
          id
        }
        nextToken
      }
    }
  }
`;
export const onDeleteEscapeRoom = /* GraphQL */ `
  subscription OnDeleteEscapeRoom {
    onDeleteEscapeRoom {
      id
      name
      seed
      author
      duration
      riddles {
        items {
          id
        }
        nextToken
      }
    }
  }
`;
export const onCreateEscapeRoomRiddles = /* GraphQL */ `
  subscription OnCreateEscapeRoomRiddles {
    onCreateEscapeRoomRiddles {
      id
      escaperoom {
        id
        name
        seed
        author
        duration
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
export const onUpdateEscapeRoomRiddles = /* GraphQL */ `
  subscription OnUpdateEscapeRoomRiddles {
    onUpdateEscapeRoomRiddles {
      id
      escaperoom {
        id
        name
        seed
        author
        duration
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
export const onDeleteEscapeRoomRiddles = /* GraphQL */ `
  subscription OnDeleteEscapeRoomRiddles {
    onDeleteEscapeRoomRiddles {
      id
      escaperoom {
        id
        name
        seed
        author
        duration
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
export const onCreateRiddle = /* GraphQL */ `
  subscription OnCreateRiddle {
    onCreateRiddle {
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
export const onUpdateRiddle = /* GraphQL */ `
  subscription OnUpdateRiddle {
    onUpdateRiddle {
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
export const onDeleteRiddle = /* GraphQL */ `
  subscription OnDeleteRiddle {
    onDeleteRiddle {
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
