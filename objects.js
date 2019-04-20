const playlist = { artist: "band", song "song" }
 
updateObjectWithKeyAndValue(recipe, 'chocolate', '1 cup')

function updateObjectWithObject(targetObject, updatesObject) {
  return Object.assign({}, targetObject, updatesObject)
}

function updateObjectWithKeyAndValue(obj, key, value) {
 
  return Object.assign({}, obj, { [key]: value })
}