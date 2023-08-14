/*Localizing a string means
 presenting the content in a 
 way that is appropriate
for a particular
region or language,
including things like 
date formats, number formats, a
and translations.
*/

const number = 67342736721.789;

const result =  new  Intl.NumberFormat('de-DE').format(number);
console.log(result);