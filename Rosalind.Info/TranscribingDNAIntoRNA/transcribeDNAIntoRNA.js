// Load the fs (filesystem) module.
var fs = require('fs');



fs.readFile('transcribeDNAIntoRNA.txt', function (err, nucleotide) {
	var result = '';
	// If an error occurred, throwing it will
	// display the exception and kill our app.
	if (err) throw err;
	 
	// logData is a Buffer, convert to string.
	var nucleotides = nucleotide.toString();
	 
	// Break up the file into lines.
	var lines = nucleotides.split('');
	 
	lines.forEach(function(line) {
		switch(line)
		{
			case 'T':
				result = result + 'U';
				break;
			default:
				result = result + line;
				break;
		}
	});
	
	console.log(result);
	
	fs.writeFile('transcribeDNAIntoRNAResult.txt', result, function(err){
		if(err) throw err;
		console.log('It\s saved!');
	});
});