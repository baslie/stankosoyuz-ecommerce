const EquipmentService = require('./equipment')

module.exports = () => {
  return {
    equipmentService: new EquipmentService({ manager: this.manager }),
  }
}
