module.exports = (router) => {
  router.get('/equipment', async (req, res) => {
    const manager = req.scope.resolve('manager')
    const equipments = await manager.find('Equipment', {})
    res.json({ equipments })
  })
}
