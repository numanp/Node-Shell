var fs = require('fs');
var request = require('request');

var pwd = function(file, done){
	var output = ''
	output += (process.argv[1])
	done(output);
};

var ls = function(file, done){
	var output = ''
	fs.readdir('.', function(err, files) {
  	if (err) throw err;
  	files.forEach(function(file) {
    	output += file.toString() + "\n";
  	})
  		done(output);
	});

}

var echo = function(palabra, done){
	var output = ''
	palabra.splice(0,1);
	output = palabra.join('')
	done(output)
}


var cat = function(archivo, done){
	var output = ''
	archivo.splice(0,1);
	let arch = archivo.join(' ');
	fs.readFile(arch,'utf8', function(err, files){
		if (err) throw err;
		done(files)
	})
};

var head = function(archivo,done){
	var output = ''
	archivo.splice(0,1);
	let arch = archivo.join(' ');
	fs.readFile(arch,'utf8', function(err, files){
		if (err) throw err;
	var arrAux = files.split('\n')

	for(var i = 0; i < 5; i++){
		output += arrAux[i]
		if (i < 4) {
			output += '\n'
		}
	}
	done(output)
	}) 
};

var tail = function(archivo, done){
	var output = '';
	archivo.splice(0,1);
	let arch = archivo.join(' ');
	fs.readFile(arch,'utf8', function(err, files){
		if (err) throw err;
		var arrAux = files.split('\n')

		for(var i = arrAux.length - 1; i > arrAux.length - 6; i--){
			output += arrAux[i]
			output += '\n'
		}
		done(output)
	}) 
}

var sort = function(archivo, done) {
	var output = '';
	archivo.splice(0,1);
	fs.readFile(archivo[0], 'utf-8', function(err, data){
		if (err) throw err;
		var newValue = data.split('\n');
		newValue.sort().join()
		
		fs.writeFile(archivo[0], newValue, 'utf-8', function (err) {
		if (err) throw err;
		output += newValue.join(' ');

		});
		done(output)
	});
		
}

var wc = function(archivo, done){
	var output = '';
	archivo.splice(0,1);
	let arch = archivo.join(' ');
	fs.readFile(arch,'utf8', function(err, files){
		if (err) throw err;
	var arrAux = files.split('\n')
	output += arrAux.length
	done(output)
	}) 
	
};

var uniq = function(archivo, done) {
	var output = '';
	archivo.splice(0,1)
	fs.readFile(archivo[0], 'utf-8', function(err, data){
		if (err) throw err;
		var newValue = data.split('\n').sort();
		var unique = [...new Set(newValue)]
	
		fs.writeFile(archivo[0], unique, 'utf-8', function (err) {
		if (err) throw err;
		output += unique.join(' ');
		console.log(output)
		});
		done(output)
	});
	
};
var curl = function(archivo){
	archivo.splice(0,1);
	let arch = archivo.join(' ');
	request(archivo[0]).pipe(fs.createWriteStream('archivo.html'))
	console.log('archivo descargado')
}


module.exports = {
	pwd: pwd,
	ls: ls,
	echo: echo,
	cat: cat,
	head: head,
	tail: tail,
	sort: sort,
	wc: wc,
	uniq: uniq,
	curl: curl,
}