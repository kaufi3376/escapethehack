//Costum GraphQL mutations

export const createEscapeRoomByName =`
mutation($name :String!) {
    createEscapeRoom(input: {name: $name}) {
      id
      name
    }
  }`;

  export const createEscapeRoomByHardCode =`
  mutation createEscapeRoomByHardCode {
    createEscapeRoom(input: {name: "HardCodeRoom"}) {
      id
    }
  }`;


  