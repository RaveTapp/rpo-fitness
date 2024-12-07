#! /usr/bin/env node
const { Client } = require("pg");
const fs = require('fs');
require('dotenv').config()

const SQL = fs.readFileSync('populatedb.sql').toString();

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: "postgresql://"+ process.env.ROOT_NAME +":" + process.env.PASS + "@"+ process.env.LOCAL_CONNECTION + "/" + process.env.DB,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();


