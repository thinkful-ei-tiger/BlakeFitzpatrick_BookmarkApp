import $ from 'jquery';
import api from './api';
import template from './template';
import store from './store';

//waits for submit and sends form data in JSON format to api function
function handleSubmitNewBookmark() {
  $('#newBookmarkData').submit(function (event) {
    event.preventDefault();
    let bookmarkObject = {};
    $.each($(this).serializeArray(), function (i, field) {
      bookmarkObject[field.name] = field.value;
    });
     bookmarkObject = JSON.stringify(bookmarkObject);
    api.addBookmark(bookmarkObject)
    .then(response => response.json())
  .then(data => {store.addBookmarkToStore(data)
    template.render()})
  });
}

//brings up new bookmark "page"
function handleWantNewBookmark() {
  $('.add').on('click', () =>{
    template.renderAddBookmarkPage();
  });
}

//empties main and renders to get stored bookmarks
function handleCancelNewBookmark(){
  $('.cancel').on('click',()=>{
    $('main').empty();
    template.render();
  });
}

function handleExpand(){
  $('.collapsible').on('click', (event)=>{
    const targetBookmark = $(event.currentTarget.nextElementSibling);
    const pressedExpand = $(targetBookmark).attr('aria-pressed') === 'true';
    targetBookmark.toggle('#hidden').attr('aria-pressed', !pressedExpand);
  });
}

function handleDeleteBookmark() {
  $('button.delete').on('click', event => {
    const id = $(event.currentTarget).parent().parent().data('bookmark-id');
    api.deleteBookmark(id)
      .then(() => {
        store.findByIdDelete(id);
        template.render();
      });
  });
}

function handleMinimumRating(){
  $('header .rating-group').on('change','#minimumRating', function(){
    $('main').empty();
    template.render();
  });
}


function handleEventBinders(){
  handleWantNewBookmark();
  handleDeleteBookmark();
  handleMinimumRating();
}





export default {
  handleSubmitNewBookmark,
  handleExpand,
  handleCancelNewBookmark,
  handleEventBinders,
  handleDeleteBookmark,
};