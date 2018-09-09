import { exec } from 'cordova';

class AndroidDeviceInformation {
    static getProduct() {
        return new Promise<string>((resolve, reject) => {
            exec(resolve, reject, 'AndroidDeviceInformation', 'getProduct', []);
        });
    }

    static getOSVersion() {
        return new Promise<string>((resolve, reject) => {
            exec(resolve, reject, 'AndroidDeviceInformation', 'getOSVersion', []);
        });
    }

    static getRelease() {
        return new Promise<string>((resolve, reject) => {
            exec(resolve, reject, 'AndroidDeviceInformation', 'getRelease', []);
        });
    }

    static getSecurityPatch() {
        return new Promise<string>((resolve, reject) => {
            exec(resolve, reject, 'AndroidDeviceInformation', 'getSecurityPatch', []);
        });
    }

    static getModel() {
        return new Promise<string>((resolve, reject) => {
            exec(resolve, reject, 'AndroidDeviceInformation', 'getModel', []);
        });
    }

    static getDevice() {
        return new Promise<string>((resolve, reject) => {
            exec(resolve, reject, 'AndroidDeviceInformation', 'getDevice', []);
        });
    }

    static getSDK() {
        return new Promise<number>((resolve, reject) => {
            exec(resolve, reject, 'AndroidDeviceInformation', 'getSDK', []);
        });
    }

    static getManufacturer() {
        return new Promise<string>((resolve, reject) => {
            exec(resolve, reject, 'AndroidDeviceInformation', 'getManufacturer', []);
        });
    }

    static getBoard() {
        return new Promise<string>((resolve, reject) => {
            exec(resolve, reject, 'AndroidDeviceInformation', 'getBoard', []);
        });
    }

    static getType() {
        return new Promise<string>((resolve, reject) => {
            exec(resolve, reject, 'AndroidDeviceInformation', 'getType', []);
        });
    }

    static getDisplay() {
        return new Promise<string>((resolve, reject) => {
            exec(resolve, reject, 'AndroidDeviceInformation', 'getDisplay', []);
        });
    }

    static getHardware() {
        return new Promise<string>((resolve, reject) => {
            exec(resolve, reject, 'AndroidDeviceInformation', 'getHardware', []);
        });
    }

    static getHost() {
        return new Promise<string>((resolve, reject) => {
            exec(resolve, reject, 'AndroidDeviceInformation', 'getHost', []);
        });
    }

    static getBrand() {
        return new Promise<string>((resolve, reject) => {
            exec(resolve, reject, 'AndroidDeviceInformation', 'getBrand', []);
        });
    }
}

export = AndroidDeviceInformation;
