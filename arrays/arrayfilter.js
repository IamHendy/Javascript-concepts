//array.filter -crattes anew array 
//with the specified command
//I will use filter.array to filter ages of students

const ages = [15, 36, 23, 12, 37, 24, 28, 26];

const adults  = ages.filter(function(age){
    return age >= 18;


});
console.log(adults);