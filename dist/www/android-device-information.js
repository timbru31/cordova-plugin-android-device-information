"use strict";
var cordova_1 = require("cordova");
var AndroidDeviceInformation = (function () {
    function AndroidDeviceInformation() {
    }
    AndroidDeviceInformation.getProduct = function () {
        return new Promise(function (resolve, reject) {
            cordova_1.exec(resolve, reject, 'AndroidDeviceInformation', 'getProduct', []);
        });
    };
    AndroidDeviceInformation.getOSVersion = function () {
        return new Promise(function (resolve, reject) {
            cordova_1.exec(resolve, reject, 'AndroidDeviceInformation', 'getOSVersion', []);
        });
    };
    AndroidDeviceInformation.getRelease = function () {
        return new Promise(function (resolve, reject) {
            cordova_1.exec(resolve, reject, 'AndroidDeviceInformation', 'getRelease', []);
        });
    };
    AndroidDeviceInformation.getSecurityPatch = function () {
        return new Promise(function (resolve, reject) {
            cordova_1.exec(resolve, reject, 'AndroidDeviceInformation', 'getSecurityPatch', []);
        });
    };
    AndroidDeviceInformation.getModel = function () {
        return new Promise(function (resolve, reject) {
            cordova_1.exec(resolve, reject, 'AndroidDeviceInformation', 'getModel', []);
        });
    };
    AndroidDeviceInformation.getDevice = function () {
        return new Promise(function (resolve, reject) {
            cordova_1.exec(resolve, reject, 'AndroidDeviceInformation', 'getDevice', []);
        });
    };
    AndroidDeviceInformation.getSDK = function () {
        return new Promise(function (resolve, reject) {
            cordova_1.exec(resolve, reject, 'AndroidDeviceInformation', 'getSDK', []);
        });
    };
    AndroidDeviceInformation.getManufacturer = function () {
        return new Promise(function (resolve, reject) {
            cordova_1.exec(resolve, reject, 'AndroidDeviceInformation', 'getManufacturer', []);
        });
    };
    AndroidDeviceInformation.getBoard = function () {
        return new Promise(function (resolve, reject) {
            cordova_1.exec(resolve, reject, 'AndroidDeviceInformation', 'getBoard', []);
        });
    };
    AndroidDeviceInformation.getType = function () {
        return new Promise(function (resolve, reject) {
            cordova_1.exec(resolve, reject, 'AndroidDeviceInformation', 'getType', []);
        });
    };
    AndroidDeviceInformation.getDisplay = function () {
        return new Promise(function (resolve, reject) {
            cordova_1.exec(resolve, reject, 'AndroidDeviceInformation', 'getDisplay', []);
        });
    };
    AndroidDeviceInformation.getHardware = function () {
        return new Promise(function (resolve, reject) {
            cordova_1.exec(resolve, reject, 'AndroidDeviceInformation', 'getHardware', []);
        });
    };
    AndroidDeviceInformation.getHost = function () {
        return new Promise(function (resolve, reject) {
            cordova_1.exec(resolve, reject, 'AndroidDeviceInformation', 'getHost', []);
        });
    };
    AndroidDeviceInformation.getBrand = function () {
        return new Promise(function (resolve, reject) {
            cordova_1.exec(resolve, reject, 'AndroidDeviceInformation', 'getBrand', []);
        });
    };
    return AndroidDeviceInformation;
}());
module.exports = AndroidDeviceInformation;
