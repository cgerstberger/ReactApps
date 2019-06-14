import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import "./db/initDB"

//prefixes of implementation that we want to test
var indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;

//prefixes of window.IDB objects
window.IDBTransaction = window.IDBTransaction || 
window.webkitIDBTransaction || window.msIDBTransaction;
window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || 
window.msIDBKeyRange

if (!indexedDB) {
   window.alert("Your browser doesn't support a stable version of IndexedDB.")
}

const employeeData = [
   { id: "00-01", name: "gopal", age: 35, email: "gopal@tutorialspoint.com" },
   { id: "00-02", name: "prasad", age: 32, email: "prasad@tutorialspoint.com" }
];
var request = indexedDB.open("newDatabase", 1);

request.onerror = function(event) {
   console.log("error: ");
};

request.onsuccess = function(event) {
    global.db = request.result;
   console.log("success: "+ global.db);

   ReactDOM.render(<App />, document.getElementById('root'));

    // If you want your app to work offline and load faster, you can change
    // unregister() to register() below. Note this comes with some pitfalls.
    // Learn more about service workers: https://bit.ly/CRA-PWA
    serviceWorker.unregister();
};

const dailyFinancesData = [
   {id: "1", date: new Date(2019, 6, 12, 8, 27, 12), name:"Leberkäsesemmel", value: 2.49},
   {id: "2", date: new Date(2019, 6, 12, 9, 20, 17), name:"Monitor", value: 75},
   {id: "3", date: new Date(2019, 6, 12, 12, 12, 1), name:"Mittagessen", value: 5.70}
];
request.onupgradeneeded = function(event) {
   var db = event.target.result;
   var objectStore = db.createObjectStore("todos", {keyPath: "id"});
   var weightStore = db.createObjectStore("weights", {keyPath: "id"});
   var dailyFinancesStore = db.createObjectStore("dailyFinances", {keyPath: "id"});
   var financesStore = db.createObjectStore("finances", {keyPath: "id"});

      
   // for (var i in dailyFinancesData) {
   //    dailyFinancesStore.add(dailyFinancesData[i]);
   // }
}
