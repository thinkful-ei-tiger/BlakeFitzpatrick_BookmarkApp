import $ from 'jquery';
import bookmark from './bookmark';
import store from './store';

//template generator functions --gives dom changing displays
//'Add Bookmark Page' template and associated render function
function addBookmarkPage() {
  let addPage = `
    <h1> Add a Bookmark</h1>
    <form id='newBookmarkData'>
    <fieldset>

    <div id='input-group'>
    <label for="link-name">Name:</label>
    <input id="link-name" type="text" name="title" placeholder="Link Name" required>
    </div>
    <div id='input-group'>
    <label for="link-url">Bookmark Url:</label>
    <input placeholder='Must start with https://' id="link-url" type="url" name="url" required>
    </div>
    <div id='input-group'>
    <label for="description">Description of Bookmark:</label>
    <textarea id="description" type="text" placeholder="What is it for?" name="desc" value="description of link"></textarea>
    </div>
<div class="rating">
    <h3 id='rating-input'>Rate 1-5</h3>
    <input id='1' name="rating" type="radio" value="1">
       <label for="1">1</label><br>
    <input id='2' name="rating" type="radio" value="2">
       <label for="2">2</label><br>
    <input id='3' name="rating" type="radio" value="3">
       <label for="3">3</label><br>
    <input id='4' name="rating" type="radio" value="4">
       <label for="4">4</label><br>
    <input id='5' name="rating" type="radio" value="5">
       <label for="5">5</label><br>


     <button class="submit" type="submit">Add Bookmark</button></div>

    </fieldset>
    </form>
    <button class="cancel">Cancel</button>`;
  return addPage;
}


function generateBookmarkElement(bookmark){
  let bookmarkTitle = `<span>${bookmark.title}</span>`;
  let rating = `<span>${bookmark.rating}</span>`;
  let link = `<span>Go to:${' '}<a href="${bookmark.url}"  target='_blank' >${bookmark.title}</a></span>`;
  let desc = `<span>Description: ${bookmark.desc}</span>`
  let deleteButton = `<button class="delete">Delete</button>`;
  let bookmarkRating = `${bookmark.rating}`;

  if (bookmarkRating >= $('#minimumRating').val()){   
    return `<button class='collapsible'> <div id='title'>${bookmarkTitle}</div> <div id='rating'>${rating}</button>
          <div class='detailed' id='hidden' data-bookmark-id="${bookmark.id}"><p class='detailed'>${link}<br/>${desc}<br/>${deleteButton}</p></div>`;
  }else{
    return '';
  }
}

function generateBookmarkString(bookmarkList){
  const items = bookmarkList.map((item) => generateBookmarkElement(item));
  return items.join('');
}

//render functions-- tells dom what to do in different situations
function renderAddBookmarkPage() {
  $('main').html(addBookmarkPage());

  bookmark.handleCancelNewBookmark();
  bookmark.handleSubmitNewBookmark();
}

const render = function () {
  let bookmarks = store.bookmarkArray;
  const bookmarkListString = generateBookmarkString(bookmarks);
  $('main').html(bookmarkListString);
  bookmark.handleExpand();
  bookmark.handleDeleteBookmark();
};



  
export default {
  render,
  addBookmarkPage,
  renderAddBookmarkPage,
};