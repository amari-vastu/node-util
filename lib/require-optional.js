module.exports = function (path) {
  let required = null
  try {
    required = require(path)
  } catch (e) {
    if (!(e.message && e.message.startsWith(`Cannot find module '${path}'`) &&
          e.code === 'MODULE_NOT_FOUND')) throw e
  }
  return required
}
