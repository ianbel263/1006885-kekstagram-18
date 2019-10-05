'use strict';

(function () {
  var picturesContainer = document.querySelector('.pictures');
  var pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

  function createPicture(data) {
    var picture = pictureTemplate.cloneNode(true);
    picture.querySelector('.picture__img').src = data.url;
    picture.querySelector('.picture__likes').textContent = data.likes;
    picture.querySelector('.picture__comments').textContent = data.comments.lenght;

    return picture;
  }

  function renderPictures(arr) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < arr.length; i++) {
      fragment.appendChild(createPicture(arr[i]));
    }
    picturesContainer.appendChild(fragment);
  }
  renderPictures(window.data.mockData);
})();
