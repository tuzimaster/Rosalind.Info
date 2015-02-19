// Load the fs (filesystem) module.
var fs = require('fs');



fs.readFile('countingPointMutations.txt', function (err, nucleotide) {
	var result = '';
	// If an error occurred, throwing it will
	// display the exception and kill our app.
	if (err) throw err;
	 
	// logData is a Buffer, convert to string.
	var nucleotides = nucleotide.toString();
	console.log(nucleotides);
	// Break up the file into lines.
	var lines = nucleotides.split('\n');
	
	var p = 0;
	var lineLength = 0;
	var dna = ["",""];
	
	lines.forEach(function(line) {
		dna[p] = line;
		lineLength = line.length;
		p = p + 1;
		console.log(line);
		console.log(lineLength);
	});
	
	var pointMutations = 0;

	for(var i = 0; i < lineLength; i++)
	{
		if(dna[0].charAt(i) != dna[1].charAt(i))
		{
			pointMutations = pointMutations + 1;
		}
	}
	
	console.log(pointMutations);
	
	fs.writeFile('transcribeDNAIntoRNAResult.txt', pointMutations, function(err){
		if(err) throw err;
		console.log('It\s saved!');
	});
});