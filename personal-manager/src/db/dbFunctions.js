function read() {
   var transaction = global.db.transaction(["employee"]);
   var objectStore = transaction.objectStore("employee");
   var request = objectStore.get("00-03");
   
   request.onerror = function(event) {
      alert("Unable to retrieve daa from database!");
   };
   
   request.onsuccess = function(event) {
      // Do something with the request.result!
      if(request.result) {
         alert("Name: " + request.result.name + ",  Age: " + request.result.age + ", Email: " + request.result.email);
      } else {
         alert("Kenny couldn't be found in your database!");
      }
   };
}

const readAll = (name) => {
   var objectStore = global.db.transaction(name).objectStore(name);
   
   objectStore.openCursor().onsuccess = function(event) {
      var cursor = event.target.result;
      
      if (cursor) {
         alert("Id: " + cursor.key + " Date: " + cursor.value.date + ",  Text: " + cursor.value.text);
         cursor.continue();
      } else {
         alert("No more entries!");
      }
   };
}

export const readAllTodos = () => {
   readAll("todos")
}

const ID = function () {
   // Math.random should be unique because of its seeding algorithm.
   // Convert it to base 36 (numbers + letters), and grab the first 9 characters
   // after the decimal.
   return '_' + Math.random().toString(36).substr(2, 9);
 };

export const addTodoItem2 = () => {
   var request = global.db.transaction(["todos"], "readwrite")
   .objectStore("todos")
   .add({id: ID(), text: "Mobile Web Development - Project"});
   
   request.onsuccess = function(event) {
      alert("Todo item has been added to your database.");
   };
   
   request.onerror = function(event) {
      alert("Unable to add todo item\r\Item is aready exist in your database! ");
   }
};

export const addTodoItem = (item) => {
   var request = global.db.transaction(["todos"], "readwrite")
   .objectStore("todos")
   .add({id: ID(), ...item});
   
   request.onsuccess = function(event) {
      alert("Todo item has been added to your database.");
   };
   
   request.onerror = function(event) {
      alert("Unable to add todo item\r\Item is aready exist in your database! ");
   }
}

function add() {
   var request = global.db.transaction(["employee"], "readwrite")
   .objectStore("employee")
   .add({ id: "00-03", name: "Kenny", age: 19, email: "kenny@planet.org" });
   
   request.onsuccess = function(event) {
      alert("Kenny has been added to your database.");
   };
   
   request.onerror = function(event) {
      alert("Unable to add data\r\nKenny is aready exist in your database! ");
   }
}

function remove() {
   var request = global.db.transaction(["employee"], "readwrite")
   .objectStore("employee")
   .delete("00-03");
   
   request.onsuccess = function(event) {
      alert("Kenny's entry has been removed from your database.");
   };
}