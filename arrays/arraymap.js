/*transforms each element in an array 
and creates a new array with the results
 */

const nums = [3, 8, 7, 6, 5, 9, 2, ];

nums.map(function(values){
     let doubles = values * 2;
     console.log(doubles);
});