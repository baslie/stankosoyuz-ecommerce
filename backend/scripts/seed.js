const { getConfigFile } = require('@medusajs/medusa/dist/loaders/helpers/configs')
const { Medusa } = require('@medusajs/medusa')
const path = require('path')

async function run() {
  const rootDir = path.join(__dirname, '..')
  const { configModule } = getConfigFile(rootDir)
  const medusa = await Medusa.prepare(configModule)
  const manager = medusa.container.resolve('manager')
  await manager.insert('Equipment', { title: 'Тестовый станок', description: 'Описание', specs: { power: '10kW' } })
  process.exit()
}
run()
