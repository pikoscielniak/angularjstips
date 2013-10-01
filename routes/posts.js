/* global exports, require*/
var sleep = require('sleep');

var posts = [
    {
        title: "Tytuł 1",
        author: 'Jan Kowalski',
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae earum ex laboriosam nesciunt ratione rem suscipit " +
            "veniam. Ad exercitationem fugit, magnam natus odio quaerat quam qui reiciendis. In, iusto quidem?"
    },
    {
        title: "Tytuł 2",
        author: 'Jan Kowalski',
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae earum ex laboriosam nesciunt ratione rem suscipit " +
            "veniam. Ad exercitationem fugit, magnam natus odio quaerat quam qui reiciendis. In, iusto quidem?"
    },
    {
        title: "Tytuł 3",
        author: 'Anna Kowalska',
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae earum ex laboriosam nesciunt ratione rem suscipit " +
            "veniam. Ad exercitationem fugit, magnam natus odio quaerat quam qui reiciendis. In, iusto quidem?"
    }
];

exports.list = function (req, res) {
//    sleep.sleep(2);
    res.json(posts);
};

