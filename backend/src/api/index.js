const equipment = require('./equipment')

module.exports = (router) => {
  equipment(router)
  return router
}
