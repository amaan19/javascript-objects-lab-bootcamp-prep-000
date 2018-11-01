var recipes = {};
function updateObjectWithKeyAndValue (obj,key,value) {
  return Object.assign({}, {[key]: value});
}
function destructivelyUpdateObjectWithKeyAndValue (obj, key, value) {
  return Object.assign({[key]: value});
}
function deleteFromObjectByKey (obj,key) {
  delete obj[key];
  return Object.assign({}, obj);
}
function destructivelyDeleteFromObjectByKey (obj, key) {
  delete obj[key];
  return obj
}
var recipes = {Pizza: 'pepperoni'}
function updateObjectWithKeyAndValue (object,key,value) {
  return Object.assign( {},object, {[key]: value})
}
function destructivelyUpdateObjectWithKeyAndValue(object,key,value) {
  return Object.assign({[key]: value})
}
function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign({},object)
  delete newObj[key]
  return newObj
}
function destructivelyDeleteFromObjectByKey (object,key) {
    delete object[key]
  return object
}