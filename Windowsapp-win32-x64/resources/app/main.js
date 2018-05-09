// var {app, BrowserWindow,Menu} = require('electron');

//   let win
//   app.on('ready',()=>{
//     win = new BrowserWindow({width: 800, height: 600});
// win.loadURL('http://localhost:4200');
// win.on('closed',()=>{
// win=null;
// })
//   })
//   app.on('activate', () => {
//     if (win === null) {
//       createWindow()
//     }
//   })
//   app.on('window-all-closed', () => {

//     if (process.platform !== 'darwin') {
//       app.quit()
//     }
//   })
// const low = require('lowdb')
// const FileSync = require('lowdb/adapters/FileSync')

// const adapter = new FileSync('db.json')
// const db = low(adapter)


// db.defaults({ posts: [],value: [] ,user: {}, count: 0 })
// .write()


// db.get('posts')
//   .push({ id: 1, title: 'lowdb is awesome'})
//   .write()
//   db.get('value')
//   .push({ code: 101, name: ' awesome'})
//   .write()
//   console.log(db.get('posts')
//   // .map('title')
//   .value())
//   db.read()
// console.log('State has been updated')


// const newState = {}
// db.setState(newState)
 
// db.set('user.name', 'typicode')
//   .write()
  

// db.update('count', n => n + 1)
//   .write()
const lowdb = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

// .. other code here ..

// Create the database instance..
const dbfile = "E:/electron-demos/ang-electron2/src/db.json";
const adapter = new FileSync(dbfile);
this.database = new lowdb(adapter);

// Default db file setup example..
if (!this.database.has("users").value()) {
    this.database.defaults({
        users: [],
    }).write();
}