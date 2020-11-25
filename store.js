
const bookmarkArray = [];

function addBookmarkToStore(bookmark){
  this.bookmarkArray.push(bookmark);
}
function findByIdDelete(id){
  this.bookmarkArray = this.bookmarkArray.filter(currentBookmark=> currentBookmark.id !== id );
}


export default {
  bookmarkArray,
  addBookmarkToStore,
  findByIdDelete,
};