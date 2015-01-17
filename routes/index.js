// JavaScript Document
var express = require('express');
var router = express.Router();

var data = require('../data/index');

var https = require('https');

var url = 'https://api.500px.com/v1/photos?feature=user_favorites&username=jesserafalko&sort=created_at&image_size=3&include_store=store_download&include_states=voted&consumer_key=Xwv1mwJGf7mIqqq0RzQGj64tVazv5zGe1nhGSk46';

var _500pxData = {};

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

function setData(d) {
    _500pxData = d;
}

getImages(setData);

exports.index = function (req, res) {
	res.render('index', {
		title: 'Code Challenge - Jesse Rafalko', 
		_500pxData: _500pxData.photos[0].image_url,
        data: data});
};

exports.categories = function (req, res) {
	res.render('categories', {
		title: 'Code Challenge - Jesse Rafalko', 
		_500pxData: _500pxData.photos[0].image_url,
        data: data});
};

exports.contact = function (req, res) {
	res.render('contact', {
		title: 'Code Challenge - Jesse Rafalko', 
		_500pxData: _500pxData.photos[0].image_url,
        data: data});
};