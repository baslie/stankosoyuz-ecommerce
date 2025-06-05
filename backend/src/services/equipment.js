class EquipmentService {
  constructor({ manager }) {
    this.manager = manager
  }

  async list(filter = {}) {
    return await this.manager.find('Equipment', filter)
  }
}

module.exports = EquipmentService
