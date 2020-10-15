
export const getEscapeRoomByName=`
query MyQuery($author: String) {
    listEscapeRooms(filter: {author: {eq: $author}}) {
      items {
        author
        id
        name
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
  