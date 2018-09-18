var commands = require('./commands')
// Output un prompt
process.stdout.write('escribi algo > ');
// El evento stdin 'data' se dispara cuando el user escribe una línea
process.stdin.on('data', function (data) {
  var userCommand = data.toString().trim();
  var inputSplit = userCommand.split(' '); // remueve la nueva línea
  var sendToCommandJs = commands[inputSplit[0]];	
  if(userCommand == 'pwd'){
  	commands[userCommand](null, done);
  } else if (userCommand == 'ls'){
  	commands[userCommand](null, done);
  } else if (inputSplit[0] == 'echo'){
    sendToCommandJs(inputSplit, done)
  } else if(inputSplit[0] == 'cat'){
    sendToCommandJs(inputSplit, done)
  } else if(inputSplit[0] == 'head'){
    sendToCommandJs(inputSplit, done)
  } else if(inputSplit[0] == 'tail'){
    sendToCommandJs(inputSplit, done)
  } else if(inputSplit[0] == 'sort'){
    sendToCommandJs(inputSplit, done)
  } else if(inputSplit[0] == 'wc'){
    sendToCommandJs(inputSplit, done)
  } else if(inputSplit[0] == 'uniq'){
    sendToCommandJs(inputSplit, done)
  } else if(inputSplit[0] == 'curl'){
    sendToCommandJs(inputSplit, done)
  } 

    function done(output){
        process.stdout.write(output);
        process.stdout.write('\nprompt > ')
    }
  ;
});

