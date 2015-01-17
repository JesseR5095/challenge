// JavaScript Document
var express = require('express');
var router = express.Router();

var examples = require('../data/index');
var http = require('http');
var https = require('https');

var url = 'https://api.500px.com/v1/photos?feature=user_favorites&username=jesserafalko&sort=created_at&image_size=3&include_store=store_download&include_states=voted&consumer_key=Xwv1mwJGf7mIqqq0RzQGj64tVazv5zGe1nhGSk46';

var _500pxData = {};

/**https.get(url, function(res) {
    var body = '';

    res.on('data', function(chunk) {
        body += chunk;
    });

    res.on('end', function() {
        _500pxData = JSON.parse(body)
    });
}).on('error', function(e) {
      console.log("Got error: ", e);
});**/


function getImages(callback){
    var body = '';
    https.get(url, function(res){
        res.on('data', function (chunk) {
            body += chunk;
        });
        res.on('end', function () {
            callback(JSON.parse(body));
        });
    })
}

function setData(data) {
    _500pxData = data;
    //console.log(_500pxData.photos[0].image_url);
}

getImages(setData);

//for (var number in examples) {
//    examples[number] = example(examples[number]);
//}

exports.example = function(req, res){
    var number = req.param('number');

    if (typeof examples[number] === 'undefined') {
        res.status(404).json({status: 'error'});
    } else {
        res.json(examples[number]);
    }
};

exports.arrived = function(req, res){
    var number = req.param('number');

    if (typeof examples[number] === 'undefined') {
        res.status(404).json({status: 'error'});
    } else {
        examples[number].name = "foo";
        res.json({status: 'done'});
    }
};

exports.list = function (req, res) {
	res.render('list', {
		title: 'All Names', 
		examples: examples});
};

exports._500px = function (req, res) {
	res.render('list', {
		title: 'All Names', 
		examples: _500pxData.photos[0].image_url});
};