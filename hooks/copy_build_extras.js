#!/usr/bin/env nod

var fs = require('fs');

var pluginLocation = 'plugins/cordova-plugin-android-device-information/hooks';

fs.appendFileSync('platforms/android/build.gradle', fs.readFileSync(`${pluginLocation}/android-build-extras.gradle`));
fs.appendFileSync('platforms/android/app/build-extras.gradle', fs.readFileSync(`${pluginLocation}/app-build-extras.gradle`));
