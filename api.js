const BASE_URL = 'https://thinkful-list-api.herokuapp.com/BlakeFitz';


//C
//Creates bookmark object at bookmark endpoint
const addBookmark = function (formObject) {

  return fetch(`${BASE_URL}/bookmarks`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', },
    body: formObject
  });
};

//R
//reads the objects at bookmarks endpoint
function getBookmarks() {
  return fetch(`${BASE_URL}/bookmarks`);
}

//U
//Changes a bookmark object already at endpoint
/*
const updateBookmark = function (id, updateObject) {
  const changeBookmark = JSON.stringify({ 'desc': 'ACHANGE!!!!!', 'rating': '5' });
  return fetch(`${BASE_URL}/bookmarks/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: changeBookmark
  });
};*/

//D
//Deletes existing bookmark object from  endpoint 
const deleteBookmark = function (id) {
  return fetch(`${BASE_URL}/bookmarks/${id}`,{
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

//exports functions from api.js which allows other pages to import and use
export default {
  addBookmark,
  getBookmarks,
  //updateBookmark,
  deleteBookmark,
};