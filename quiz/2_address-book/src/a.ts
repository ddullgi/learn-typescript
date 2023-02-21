// function fetchItems(): string[] {
//   var items = ["a", "b", "c"];
//   return items;
// }

// var result = fetchItems();

function fetchItems(): Promise<string[]> {
  var items: string[] = ["a", "b", "c"];
  return new Promise(function (resolve) {
    resolve(items);
  });
}
