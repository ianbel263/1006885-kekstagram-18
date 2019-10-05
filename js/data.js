'use strict';

(function () {

  var NUMBER_OF_PHOTOS = 25;
  var NUMBER_OF_AVATARS = 6;
  var MAX_COMMENTS = 50;
  var MOCK = {
    url: 'photos/',
    description: ['In ut reprehenderit adipisicing consequat cupidatat ullamco do dolore veniam qui dolor irure proident ut.', 'Lorem ipsum minim dolor voluptate ut tempor est dolor in dolore sit in deserunt consequat cillum eu elit labore.', 'Anim dolore ut tempor exercitation ad ut id ut eu nulla et sint.', 'Qui tempor nostrud proident culpa consequat sed do incididunt aliqua velit ut est.', 'Dolor fugiat amet aute veniam sunt commodo ut consequat fugiat minim ut laborum voluptate aliquip dolore.', 'Aliqua est sint anim nulla aliquip excepteur quis ut est ad elit sunt occaecat occaecat in aliquip in elit.'],
    likes: {
      min: 15,
      max: 200
    },
    comments: [
      {
        avatar: 'img/avatar-',
        message: ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'],
        name: ['Артем', 'Андрей', 'Лариса', 'Виктор', 'Дарья', 'Мария', 'Сергей', 'Владимир', 'Олеся', 'Григорий']
      }
    ]
  };

  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function generateData() {
    var arr = [];
    for (var i = 0; i < NUMBER_OF_PHOTOS; i++) {
      arr[i] = {
        url: MOCK.url + (i + 1) + '.jpg',
        description: MOCK.description[getRandomNumber(0, MOCK.description.length - 1)],
        likes: getRandomNumber(MOCK.likes.min, MOCK.likes.max)
      };

      var numberComments = getRandomNumber(0, MAX_COMMENTS);
      arr[i].comments = [];
      for (var j = 0; j <= numberComments; j++) {
        arr[i].comments[j] = {
          avatar: MOCK.comments[0].avatar + getRandomNumber(1, NUMBER_OF_AVATARS) + '.svg',
          message: MOCK.comments[0].message[getRandomNumber(0, MOCK.comments[0].message.length - 1)],
          name: MOCK.comments[0].name[getRandomNumber(0, MOCK.comments[0].name.length - 1)]
        };
      }
    }
    return arr;
  }

  window.data = {
    mockData: generateData()
  };
})();
