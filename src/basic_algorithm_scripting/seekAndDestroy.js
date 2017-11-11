// function destroyer(arr) {

//     var args = [...arguments];
//     args.splice(0, 1);
//     var tempArr = [];
//     for (var i = 0; i < arr.length; i++) {
//         for(var j = 0; j < args.length; j++){
//             if(arr[i] == args[j]){
//                 delete arr[i];

//             }
//         }
//     }
//     tempArr = arr.filter(removeFalsy);
//     return tempArr;
//     function removeFalsy(value){
//         return Boolean(value);
//     }
// }
function destroyer(arr) {

    var args = [...arguments];
    // convert arguments to an array
    args.splice(0, 1);
    // remove first array argument
    var tempArr = [];
    // placeholder
    for (var i = 0; i < arr.length; i++) {
        // loop through first array argument
        for (var j = 0; j < args.length; j++) {
            // loop through args length needs to be flexible
            if (arr[i] == args[j]) {
                delete arr[i];
                // if assigned value matches delete
            }
        }
    }
    // pass function to check if array element exists
    tempArr = arr.filter(removeFalsy);
    return tempArr;
    // return the remaining elements
    function removeFalsy(value) {
        return Boolean(value);
    }
}
var data = destroyer([1, 2, 3, 1, 2, 3], 2, 3);
console.log(data);