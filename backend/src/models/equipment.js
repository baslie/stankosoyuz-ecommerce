module.exports = {
  name: 'Equipment',
  columns: {
    id: {
      primary: true,
      type: 'int',
      generated: true,
    },
    title: {
      type: 'varchar',
    },
    description: {
      type: 'text',
      nullable: true,
    },
    specs: {
      type: 'jsonb',
      nullable: true,
    },
  },
}
