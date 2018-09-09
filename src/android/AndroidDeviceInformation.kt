package de.dustplanet.cordova

import org.apache.cordova.CallbackContext
import org.apache.cordova.CordovaPlugin
import org.json.JSONArray

class AndroidDeviceInformation : CordovaPlugin() {
    override fun execute(action: String?, args: JSONArray?, callbackContext: CallbackContext?): Boolean {
        when {
            action == "getProduct" -> {
                getProduct(callbackContext!!)
                return true
            }
            action == "getOSVersion" -> {
                getOSVersion(callbackContext!!)
                return true
            }
            action == "getRelease" -> {
                getRelease(callbackContext!!)
                return true
            }
            action == "getSecurityPatch" -> {
                getSecurityPatch(callbackContext!!)
                return true
            }
            action == "getModel" -> {
                getModel(callbackContext!!)
                return true
            }
            action == "getDevice" -> {
                getDevice(callbackContext!!)
                return true
            }
            action == "getSDK" -> {
                getSDK(callbackContext!!)
                return true
            }
            action == "getManufacturer" -> {
                getManufacturer(callbackContext!!)
                return true
            }
            action == "getBoard" -> {
                getBoard(callbackContext!!)
                return true
            }
            action == "getType" -> {
                getType(callbackContext!!)
                return true
            }
            action == "getDisplay" -> {
                getDisplay(callbackContext!!)
                return true
            }
            action == "getHardware" -> {
                getHardware(callbackContext!!)
                return true
            }
            action == "getHost" -> {
                getHost(callbackContext!!)
                return true
            }
            action == "getBrand" -> {
                getBrand(callbackContext!!)
                return true
            }
        }
        return false
    }

    private fun getProduct(callbackContext: CallbackContext) {
        callbackContext.success(android.os.Build.PRODUCT)
    }

    private fun getOSVersion(callbackContext: CallbackContext) {
        callbackContext.success(System.getProperty("os.version"))
    }

    private fun getRelease(callbackContext: CallbackContext) {
        callbackContext.success(android.os.Build.VERSION.RELEASE)
    }

    private fun getSecurityPatch(callbackContext: CallbackContext) {
        callbackContext.success(android.os.Build.VERSION.SECURITY_PATCH)
    }

    private fun getModel(callbackContext: CallbackContext) {
        callbackContext.success(android.os.Build.MODEL)
    }

    private fun getDevice(callbackContext: CallbackContext) {
        callbackContext.success(android.os.Build.DEVICE)
    }

    private fun getSDK(callbackContext: CallbackContext) {
        callbackContext.success(android.os.Build.VERSION.SDK_INT)
    }

    private fun getManufacturer(callbackContext: CallbackContext) {
        callbackContext.success(android.os.Build.MANUFACTURER)
    }

    private fun getType(callbackContext: CallbackContext) {
        callbackContext.success(android.os.Build.TYPE)
    }

    private fun getBoard(callbackContext: CallbackContext) {
        callbackContext.success(android.os.Build.BOARD)
    }

    private fun getDisplay(callbackContext: CallbackContext) {
        callbackContext.success(android.os.Build.HARDWARE)
    }

    private fun getHardware(callbackContext: CallbackContext) {
        callbackContext.success(android.os.Build.HARDWARE)
    }

    private fun getHost(callbackContext: CallbackContext) {
        callbackContext.success(android.os.Build.HOST)
    }

    private fun getBrand(callbackContext: CallbackContext) {
        callbackContext.success(android.os.Build.BRAND)
    }
}
