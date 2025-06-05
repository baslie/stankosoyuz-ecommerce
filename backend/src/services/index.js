const EquipmentService = require('./equipment')

module.exports = ({ manager }) => {
  return {
    equipmentService: new EquipmentService({ manager }),
  }
}
