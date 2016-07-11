/**
 * API for the localstorage
 * @constructor
*/
function Storage () {}

/**
 * Save data in the localstorage.
 * @param {string} key - Where to store the data.
 * @param {object} data - Data to store.
*/
Storage.prototype.storeData = function (key, data) {
  data = JSON.stringify(data)
  localStorage.setItem(key, data)
}

/**
 * Read data from the localstorage.
 * @param {string} key - Where the data is stored
 * @return {object} - The data.
*/
Storage.prototype.readData = function (key) {
  var data = localStorage.getItem(key)
  return JSON.parse(data)
}

/**
 * Clear all localstorage.
*/
Storage.prototype.clearData = function () {
  localStorage.clear()
}

/**
 * Clear storage at specific key.
 * @param {string} key - Where to store the data.
*/
Storage.prototype.clearKey = function (key) {
  localStorage.setItem(key, null)
}

/**
 * Read all keys from the localstorage.
 * @param {array} - List of all keys
*/
Storage.prototype.getAllKey = function () {
  var keys = []
  for (var key in localStorage) {
    keys.push(key)
  }
  return keys
}

/**
 * Read all data from the localstorage.
 * @param {object} - List of all stored data
*/
Storage.prototype.getAllData = function () {
  var keys = getAllKey()
  var data = {}
  for (var key in keys) {
    key = keys[key]
    data[key] = readData(key)
  }
  return data
}
