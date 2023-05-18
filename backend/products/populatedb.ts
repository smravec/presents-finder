//Db to populate
const db_name = "../backup.sqlite"

//File to extract data from
const file_path = "under-5eur.txt"

//Sqlite table name
const table_name = "Eur5"

import { readLines } from "https://deno.land/std@0.187.0/io/mod.ts";
import { DB } from "https://deno.land/x/sqlite@v3.7.2/mod.ts";

// Open a database
const db = new DB(db_name);

//Schema for the db
db.query(`
  CREATE TABLE IF NOT EXISTS ${table_name} (
    name TEXT,
    tags TEXT,
    min_age TEXT,
    max_age TEXT,
    description TEXT
  )
`);

async function processFile() {
  const file = await Deno.open(file_path);

  for await (const line of readLines(file)) {
    const columns = line.split(';').map(item => item.trim());

    if (columns.length > 4) {
      // Remove whitespaces in tags
      let tags = columns[2].replace(/\s*,\s*/g, ",");
      
      // Remove # and capitalize first letter
      tags = tags.replace(/#\w+/g, s => s.slice(1).charAt(0).toUpperCase() + s.slice(2));

      // Insert into DB
      db.query(
        `INSERT INTO ${table_name} (name, tags, min_age, max_age, description) VALUES (?, ?, ?, ?, ?)`,
        [columns[0], tags, columns[3], columns[4], columns[1]]
      );
    }
  }

  Deno.close(file.rid);
}

// Wait for processFile() to finish before closing the database
await processFile();

// Now we close the database
db.close();