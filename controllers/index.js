// File name: midterm
// Author's name: Haoren Qu
// student ID: 301180297
// Web App name: booklist

exports.home = function(req, res, next) {
    res.render('index', { title: 'Home' });
};
