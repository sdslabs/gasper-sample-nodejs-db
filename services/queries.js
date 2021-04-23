const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function createTable(){
  await db.query(`CREATE TABLE if not exists testtable (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255))`);
  await db.query(`INSERT INTO testtable (name) VALUES ('John')`);
}

async function getMultiple(page = 1){
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT id, name FROM testtable LIMIT ?,?`, 
    [offset, config.listPerPage]
  );
  const data = helper.emptyOrRows(rows);
  const meta = {page};

  return {
    data,
    meta
  }
}

module.exports = {
  createTable,
  getMultiple
}