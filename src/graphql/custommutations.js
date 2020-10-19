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


export const deleteEscapeRoom =`mutation MyMutation($id: ID!) {
    deleteEscapeRoom(input: {id: $id}) {
      id
    }
  }
  `


export const createEscapeRoomRiddles =`mutation MyMutation($escid: ID, $ridid: ID) {
    createEscapeRoomRiddles(input: {escapeRoomRiddlesEscaperoomId: $escid, escapeRoomRiddlesRiddleId: $ridid}) {
      id
    }
  }  
  `


export const createEscapeRoomSeed =`mutation MyMutation($escroomid: String, $seed: Int) {
  createSeed(input: {escaperoomid: $escroomid, seed: $seed}) {
    escaperoomid
  }
}`

export const updateSeed =`
mutation MyMutation($idr :ID! , $seed : String ){
  updateEscapeRoom(input: {id: $idr, seed: $seed}) {
    author
    id
    name
    seed
  }
}
`;