const cds = require('@sap/cds');

module.exports = cds.service.impl(async function() {
  const { TestBooks } = this.entities;

  this.on('READ', TestBooks, async (req) => {
    const db = await cds.connect.to('db');
    return db.run(req.query);
  });
});
