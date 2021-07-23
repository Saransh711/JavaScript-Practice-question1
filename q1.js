// function uniqueElements (item ,ind, array){
//     if(item){
//         let a = arr.indexOf(item) === arr.lastIndexOf(item)
//         return a;
//      }
// }
// let arr = [9,2,3,2,6,6];
// let unique = arr.filter(uniqueElements);
// console.log(unique);

function firstUniqueElement() {
  for (let i = 0; i < array.length; i++) {
    var count = 0;
    for (let j = 0; j < array.length; j++) {
      if (array[i] == array[j]) {
        count = count + 1;
      }
    }
    if (count == 0) {
      console.log(array[i]);
      break;
    }
    if (count != 0 && i == array.length - 1) {
      console.log("null");
      break;
    }
  }
}
var arr=[9,2,3,2,6,6]
firstUniqueElement(arr);