
import $ from 'jquery';
import api from './api';
import './index.css';
import store from './store.js';
import template from './template.js';
import bookmark from './bookmark';

const main = function () {
  api
    .getBookmarks()
    .then((res) => res.json())
    .then((res) => {
      res.forEach((bookmark) => store.addBookmarkToStore(bookmark));
      template.render();
    });
  bookmark.handleEventBinders();
};
export default {
  main,
};

$(main);