import Datastore from "nedb";

const db = new Datastore({ filename: process.env.DB_PATH, autoload: true });
db.loadDatabase();

export default db;
