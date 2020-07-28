// class Storage {
//   constructor(arr) {
//     this.items = arr;
//   }

//   getItems() {
//     return this.items;
//   }

//   addItem(item) {
//     return this.items.push(item);
//   }

//   removeItem(item) {
//     if (this.items.includes(item)) {
//       const index = this.items.indexOf(item);
//       this.items.splice(index, 1);
//     } else console.log("No item to delete");
//     return this.items;
//   }
// }

// const storage = new Storage([
//   "Нанитоиды",
//   "Пролонгер",
//   "Железные жупи",
//   "Антигравитатор",
// ]);

// console.log(storage);

// const items = storage.getItems();
// console.table(items);

// storage.addItem("Дроид");
// console.table(storage.items);

// storage.removeItem("Пролонгер");
// console.table(storage.items);
