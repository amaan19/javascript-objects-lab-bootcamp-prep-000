var recipes = {};
function updateObjectWithKeyAndValue (obj,key,value) {
  return Object.assign({}, {[key]: value});
}
function destructivelyupdateObjectWithKeyAndValue (obj, key, value) {
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