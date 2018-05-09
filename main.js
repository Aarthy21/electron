const lowdb = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const dbfile = "E:/electron-demos/ang-electron2/src/db.json";
const adapter = new FileSync(dbfile);
this.database = new lowdb(adapter);

if (!this.database.has("users").value()) {
    this.database.defaults({
        users: [],
    }).write();
}