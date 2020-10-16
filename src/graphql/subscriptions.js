/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateEscapeRoom = /* GraphQL */ `
  subscription OnCreateEscapeRoom {
    onCreateEscapeRoom {
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
export const onUpdateEscapeRoom = /* GraphQL */ `
  subscription OnUpdateEscapeRoom {
    onUpdateEscapeRoom {
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
export const onDeleteEscapeRoom = /* GraphQL */ `
  subscription OnDeleteEscapeRoom {
    onDeleteEscapeRoom {
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
export const onCreateEscapeRoomRiddles = /* GraphQL */ `
  subscription OnCreateEscapeRoomRiddles {
    onCreateEscapeRoomRiddles {
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
export const onUpdateEscapeRoomRiddles = /* GraphQL */ `
  subscription OnUpdateEscapeRoomRiddles {
    onUpdateEscapeRoomRiddles {
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
export const onDeleteEscapeRoomRiddles = /* GraphQL */ `
  subscription OnDeleteEscapeRoomRiddles {
    onDeleteEscapeRoomRiddles {
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
export const onCreateSeed = /* GraphQL */ `
  subscription OnCreateSeed {
    onCreateSeed {
      id
      escaperoomid
      seed
    }
  }
`;
export const onUpdateSeed = /* GraphQL */ `
  subscription OnUpdateSeed {
    onUpdateSeed {
      id
      escaperoomid
      seed
    }
  }
`;
export const onDeleteSeed = /* GraphQL */ `
  subscription OnDeleteSeed {
    onDeleteSeed {
      id
      escaperoomid
      seed
    }
  }
`;
