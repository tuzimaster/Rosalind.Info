// Load the fs (filesystem) module.
var fs = require('fs');

fs.readFile('countingNucelotides.txt', function (err, nucleotide) {
 
// If an error occurred, throwing it will
// display the exception and kill our app.
if (err) throw err;
 
// logData is a Buffer, convert to string.
var nucleotides = nucleotide.toString();
 
var adenineCount = 0;
var cytosineCount = 0;
var guanineCount = 0;
var thymineCount = 0;
 
// Break up the file into lines.
var lines = nucleotides.split('');
 
lines.forEach(function(line) {
	switch(line)
	{
		case 'A':
			adenineCount++;
			break;
		case 'C':
			cytosineCount++;
			break;
		case 'G':
			guanineCount++;
			break;
		case 'T':
			thymineCount++;
			break;
		default:
			break;
	}
});

console.log(adenineCount + ' ' + cytosineCount + ' ' + guanineCount + ' ' + thymineCount);  
});