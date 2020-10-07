
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