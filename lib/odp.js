module.exports = function (target, property, value) {
  const descriptor = {
    value,
    writable: false,
    enumerable: false,
    configurable: false
  }
  Object.defineProperty(target, property, descriptor)
}
