
export const getEscapeRoomByName=`
query MyQuery($author: String) {
    listEscapeRooms(filter: {author: {eq: $author}}) {
      items {
        author
        id
        name
        seed
      }
    }
  }`;

  export const getRiddlesByCategory =`
  query MyQuery($category : String) {
    listRiddles(filter: {category: {eq: $category}}) {
      items {
        name
        id
        difficulty
      }
    }
  }`;
  export const getEscapeRoomSeed =`query MyQuery($id :String) {
    listSeeds(filter: {escaperoomid: {eq: $id}}) {
      items {
        seed
      }
    }
  }`;

  export const getRiddlesBySeed =`query MyQuery($seed :String) {
    listEscapeRooms(filter: {seed: {eq: $seed}}) {
      nextToken
      items {
        riddles {
          items {
            riddle {
              category
              difficulty
              id
              name
            }
          }
        }
      }
    }
  }
  `;