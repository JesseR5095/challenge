// JavaScript Document
var express = require('express');
var router = express.Router();

var data = require('../data/index.json');

var https = require('https');

var urls = [
    'https://api.500px.com/v1/photos/search?term=Frozen%20Bubble&rpp=80&image_size=2&include_store=store_download&include_states=voted&consumer_key=Xwv1mwJGf7mIqqq0RzQGj64tVazv5zGe1nhGSk46',
    'https://api.500px.com/v1/photos/search?term=Liquid%20Fire&rpp=80&image_size=2&include_store=store_download&include_states=voted&consumer_key=Xwv1mwJGf7mIqqq0RzQGj64tVazv5zGe1nhGSk46',
    'https://api.500px.com/v1/photos/search?term=Ferro%20Fluid&rpp=80&image_size=2&include_store=store_download&include_states=voted&consumer_key=Xwv1mwJGf7mIqqq0RzQGj64tVazv5zGe1nhGSk46',
    'https://api.500px.com/v1/photos/search?term=Hyper%20Realism&rpp=80&image_size=2&include_store=store_download&include_states=voted&consumer_key=Xwv1mwJGf7mIqqq0RzQGj64tVazv5zGe1nhGSk46'];

exports.index = function (req, res) {
	res.render('index', {
		title: 'Code Challenge - Dendrite Corps.',
        data: data});
};

exports.categories = function (req, res) {
    var number = req.param('number');
    var _url;
    
    if (typeof number === 'undefined') {
        _url = urls[0];
        number = 0;
    } else {
        _url = urls[number];
    }
    
    var _500pxData = {};
    var getImages = function(callback){
        var body = '';
        https.get(_url, function(res){
            res.on('data', function (chunk) {
                body += chunk;
            });
            res.on('end', function () {
                callback([JSON.parse(body), number]);
            });
        })
    }
    var setData = function(d) {
        res.render('categories', {
            title: 'Code Challenge - Dendrite Corps.', 
            _500pxData: d[0],
            data: data,
            num: d[1]});
    }
    getImages(setData);
};

exports.contact = function (req, res) {
	res.render('contact', {
		title: 'Code Challenge - Dendrite Corps.',
        data: data});
};