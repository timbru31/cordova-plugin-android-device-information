# cordova-plugin-android-device-information

[![Linting](https://github.com/timbru31/cordova-plugin-android-device-information/workflows/Linting/badge.svg)](https://github.com/timbru31/cordova-plugin-android-device-information/actions?query=workflow%3ALinting)
[![npm audit](https://github.com/timbru31/cordova-plugin-android-device-information/workflows/Security/badge.svg)](https://github.com/timbru31/cordova-plugin-android-device-information/actions?query=workflow%3ASecurity)

[![Dependency Status](https://david-dm.org/timbru31/cordova-plugin-android-device-information.svg)](https://david-dm.org/timbru31/cordova-plugin-android-device-information)
[![devDependency Status](https://david-dm.org/timbru31/cordova-plugin-android-device-information/dev-status.svg)](https://david-dm.org/timbru31/cordova-plugin-android-device-information#info=devDependencies)
[![Known Vulnerabilities](https://snyk.io/test/github/timbru31/cordova-plugin-android-device-information/badge.svg)](https://snyk.io/test/github/timbru31/cordova-plugin-android-device-information)

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](https://commitizen.github.io/cz-cli/)
[![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=timbru31/cordova-plugin-android-device-information)](https://dependabot.com)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![npm](https://img.shields.io/npm/v/cordova-plugin-android-device-information.svg)](https://www.npmjs.com/package/cordova-plugin-android-device-information)

#### Cordova plugin to get specific Android device information

### Supported platforms

-   **Android**

### Installation

#### from npm (recommended)

`$ cordova plugin add cordova-plugin-android-device-information`

#### from git (unstable)

`$ cordova plugin add https://github.com/timbru31/cordova-plugin-android-device-information.git`

### Usage

#### Get one of the following properties (replace \_\_X\_\_)

-   getProduct
-   getOSVersion
-   getRelease
-   getSecurityPatch
-   getModel
-   getDevice
-   getSDK (returns a number)
-   getManufacturer
-   getBoard
-   getType
-   getDisplay
-   getHardware
-   getHost
-   getBrand

```js
cordova.plugins.androidDeviceInformation.get_X_().then((value) => {
    // returns the value
});
```

---

Built by (c) Tim Brust and contributors. Released under the MIT license.
