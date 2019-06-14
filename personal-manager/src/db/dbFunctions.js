
const ID = function () {
   // Math.random should be unique because of its seeding algorithm.
   // Convert it to base 36 (numbers + letters), and grab the first 9 characters
   // after the decimal.
   return '_' + Math.random().toString(36).substr(2, 9);
 };

const nameTodos = "todos";
const nameWeights = "weights";
const nameDailyFinances = "dailyFinances";
const nameFinances = "finances";
 

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

const readAllInstant = (name) => {
   var transaction = global.db.transaction(name);
   var objectStore = transaction.objectStore(name);

   if ('getAll' in objectStore) {
      // IDBObjectStore.getAll() will return the full set of items in our store.
      objectStore.getAll().onsuccess = function(event) {
         alert(event.target.result);
      };
   }
}

export const readAllTodos = () => {
   // readAll("todos")
   readAllInstant("todos")
}





const readAllInstantCallback = (storeName, callback) => {
   var transaction = global.db.transaction(storeName);
   var objectStore = transaction.objectStore(storeName);

   if ('getAll' in objectStore) {
      // IDBObjectStore.getAll() will return the full set of items in our store.
      objectStore.getAll().onsuccess = function(event) {
         // alert(event.target.result);
         callback(event.target.result);
      };
   }
}

export const readAllTodosCallback = (callback) => {
   readAllInstantCallback("todos", callback);
}

export const readAllWeightsCallback = (callback) => {
   readAllInstantCallback("weights", callback);
}

export const readAllDailyFinances = (callback) => {
   readAllInstantCallback(nameDailyFinances, callback);
}

export const readAllFinances = (callback) => {
   readAllInstantCallback(nameFinances, callback);
}

export const addItem = (storeName, item, callback) => {
   var transaction = global.db.transaction(storeName, "readwrite");
   var objectStore = transaction.objectStore(storeName);
   var newID = ID();
   var request = objectStore.add({id: newID, ...item});

   request.onsuccess = function(event) {
      alert("Item has been added to your database.");
      callback(newID);
   };
   
   request.onerror = function(event) {
      alert("Unable to add item\r\Item is aready exist in your database! ");
   }
}

export const addTodoItem = (item, callback) => {
   addItem("todos", item, callback);
}

export const addWeightItem = (item, callback) => {
   addItem("weights", item, callback);
}

export const addDailyFinanceItem = (item, callback) => {
   addItem("dailyFinances", item, callback);
}

export const addFinanceItem = (item, callback) => {
   addItem("finances", item, callback);
}

export const deleteItem = (storeName, item, callback) => {
   var transaction = global.db.transaction(storeName, "readwrite");
   var objectStore = transaction.objectStore(storeName);

   objectStore.delete(item.id).onsuccess = function(event) {
      alert("Todo item has been removed!");
      callback();
   };
}

export const deleteTodo = (ele) => {
   deleteItem("todos", ele, () => {});
}

export const deleteDailyFinance = (item) => {
   deleteItem(nameDailyFinances, item, () => {});
}

export const deleteFinance = (item) => {
   deleteItem(nameFinances, item, () => {});
}
