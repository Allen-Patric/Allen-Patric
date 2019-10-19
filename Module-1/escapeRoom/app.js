var readlineSync = require ( 'readline-sync' );


  options = ['Put hand in hole', 'Find the key, or', 'Open the door'],
  index = readlineSync.keyInSelect(options, 'What will you do?');
  if(options[index] === 'Find the key, or'){console.log('You opened the door!');}

  else{console.log('You died! lmao')}




